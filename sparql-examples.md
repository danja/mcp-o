# Query all resources available from a server
PREFIX mcp: <http://purl.org/stuff/mcp/>

SELECT ?resource ?name ?type WHERE {
  ?server a mcp:Server ;
          mcp:providesResource ?resource .
  ?resource mcp:name ?name ;
           mcp:mimeType ?type .
}

# Find tools relevant to a topic
PREFIX mcp: <http://purl.org/stuff/mcp/>

SELECT ?tool ?desc WHERE {
  ?server mcp:providesTool ?tool .
  ?tool mcp:description ?desc .
  FILTER(CONTAINS(LCASE(?desc), "text analysis"))
}

# Get conversation history with embedded resources
PREFIX mcp: <http://purl.org/stuff/mcp/>

SELECT ?msg ?content ?resource WHERE {
  ?msg a mcp:Message ;
       mcp:hasContent ?content .
  OPTIONAL {
    ?content a mcp:TextContent ;
            mcp:text ?resource .
  }
}

# Suggested RAG Integration Pattern:
1. Index resources into vector store
2. On query:
   - Find relevant resources via embedding similarity
   - Retrieve full resource content via SPARQL
   - Get associated metadata (tools, capabilities)
   - Build prompt with context

Example connection setup:
```python
from rdflib import Graph, Namespace
from sentence_transformers import SentenceTransformer

MCP = Namespace("http://purl.org/stuff/mcp/")
g = Graph()
g.parse("mcp-store.ttl")
encoder = SentenceTransformer('all-MiniLM-L6-v2')

# Index resources
resources = []
for s,p,o in g.triples((None, MCP.text, None)):
    resources.append({
        'id': str(s),
        'text': str(o),
        'embedding': encoder.encode(str(o))
    })

# Query with RAG
def query_with_context(question):
    q_embedding = encoder.encode(question)
    relevant = find_similar(q_embedding, resources)

    context = []
    for r in relevant:
        # Get metadata
        meta = g.query("""
            SELECT ?name ?type WHERE {
                ?res mcp:name ?name ;
                     mcp:mimeType ?type .
                FILTER(?res = <%s>)
            }""" % r['id'])
        context.append({
            'text': r['text'],
            'metadata': list(meta)[0]
        })

    return build_prompt(question, context)
```
