// SPARQL Update
const updateQuery = `
PREFIX mcp: <http://purl.org/stuff/mcp/>

DELETE {
  ?server mcp:providesResource ?oldResource .
}
INSERT {
  ?server mcp:providesResource <http://example.org/newResource> .
  <http://example.org/newResource> 
    a mcp:Resource ;
    mcp:name "New Resource" ;
    mcp:mimeType "text/plain" .
}
WHERE {
  ?server a mcp:Server .
  OPTIONAL { ?server mcp:providesResource ?oldResource }
}`;

// JavaScript Implementation
import { Store } from 'n3';
import { sparqlUpdateParser } from 'sparqljs';

async function updateResourceGraph(store, updateQuery) {
    const parser = new sparqlUpdateParser();
    const update = parser.parse(updateQuery);
    
    try {
        await store.update(update);
        console.log('Graph updated successfully');
    } catch (error) {
        console.error('Error updating graph:', error);
    }
}

// Usage
const store = new Store();
await updateResourceGraph(store, updateQuery);
