Contents of the MCP-O Namespace Documents Site

================================================================
File Summary
================================================================

## Purpose:

This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format:

The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
   a. A separator line (================)
   b. The file path (File: path/to/file)
   c. Another separator line
   d. The full contents of the file
   e. A blank line

## Usage Guidelines:

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
- Pay special attention to the Repository Description. These contain important context and guidelines specific to this project.

## Notes:

- Some files may have been excluded based on .gitignore rules and Repomix's
  configuration.
- Binary files are not included in this packed representation. Please refer to
  the Repository Structure section for a complete list of file paths, including
  binary files.
- Code comments have been removed.

## Additional Info:

## User Provided Header:

MCP Namespace Documents

For more information about Repomix, visit: https://github.com/yamadashy/repomix

================================================================
Directory Structure
================================================================
.gitignore
handover.ttl
index.html
LICENSE
mcp-ontology.ttl
mcp-shapes.shacl
mcp.ttl
README.md
sparql-example.js
sparql-examples.md

================================================================
Files
================================================================

================
File: .gitignore
================

# Logs

logs
_.log
npm-debug.log_
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)

report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# Runtime data

pids
_.pid
_.seed
\*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover

lib-cov

# Coverage directory used by tools like istanbul

coverage
\*.lcov

# nyc test coverage

.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# Bower dependency directory (https://bower.io/)

bower_components

# node-waf configuration

.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)

build/Release

# Dependency directories

node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)

web_modules/

# TypeScript cache

\*.tsbuildinfo

# Optional npm cache directory

.npm

# Optional eslint cache

.eslintcache

# Optional stylelint cache

.stylelintcache

# Microbundle cache

.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history

.node_repl_history

# Output of 'npm pack'

\*.tgz

# Yarn Integrity file

.yarn-integrity

# dotenv environment variable files

.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)

.cache
.parcel-cache

# Next.js build output

.next
out

# Nuxt.js build / generate output

.nuxt
dist

# Gatsby files

.cache/

# Comment in the public line in if your project uses Gatsby and not Next.js

# https://nextjs.org/blog/next-9-1#public-directory-support

# public

# vuepress build output

.vuepress/dist

# vuepress v2.x temp and cache directory

.temp
.cache

# Docusaurus cache and generated files

.docusaurus

# Serverless directories

.serverless/

# FuseBox cache

.fusebox/

# DynamoDB Local files

.dynamodb/

# TernJS port file

.tern-port

# Stores VSCode versions used for testing VSCode extensions

.vscode-test

# yarn v2

.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.\*

================
File: handover.ttl
================
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix prj: <http://example.org/project/> .

prj:MCPOntology
dc:title "MCP Ontology Development" ;
dc:description "RDF/OWL ontology for Model Context Protocol" ;
prj:status "Initial Version Complete" ;
prj:keywords "MCP, RDF, OWL, AI Agents, Context Exchange" ;
prj:deliverables (
"mcp-ontology.ttl"
"mcp-namespace.ttl"
"mcp-shapes.ttl"
"mcp-namespace.html"
) .

# Key Points:

# 1. Core classes model Server, Client, Resource, Tool, Prompt interactions

# 2. SHACL shapes enforce structural validation

# 3. HTML documentation includes RAG integration examples

# 4. Version 1.0.0 ready for review

# 5. RAG integration patterns need refinement

# 6. Consider adding:

# - More detailed tool argument validation

# - Resource versioning patterns

# - Caching strategies

# - Real-time update mechanisms

# Next Steps:

# 1. Community feedback on initial version

# 2. Develop more integration examples

# 3. Add versioning support

# 4. Create test suite

================
File: index.html
================

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Model Context Protocol Ontology Specification</title>
    <meta name="description"
        content="Formal vocabulary for describing interactions between AI language models and external context providers. Defines core concepts for resources, tools, prompts and messaging.">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Model Context Protocol Ontology">
    <meta property="og:description" content="RDF vocabulary for AI language model context interactions">
    <meta property="og:type" content="website">


    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Model Context Protocol Ontology">
    <meta name="twitter:description" content="RDF vocabulary for AI language model context interactions">

    <style>
        body {
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            font: 16px/1.6 system-ui, sans-serif;
            color: #333;
        }

        h1 {
            color: #1a73e8;
        }

        h2 {
            color: #185abc;
        }

        dt {
            font-weight: bold;
        }

        dd {
            margin-bottom: 1em;
        }
    </style>

</head>

<body>

    <h1>Model Context Protocol Ontology</h1>

    <section id="preface">
        <p><strong>tl;dr</strong> : <a href="http://modelcontextprotocol.io/">Model Context Protocol</a> expressed in <a
                href="https://en.wikipedia.org/wiki/Resource_Description_Framework">RDF</a> because <a
                href="https://en.wikipedia.org/wiki/World_Wide_Web">WWW</a>.</p>
        <p>This is a first pass, most of the heavy lifting done by <a href="https://claude.ai">Claude</a>, so while it
            looks plausible, it might not be. I've not had a play yet.</p>
        <p>There would be more but <strong>Message limit reached for Claude 3.5 Sonnet until 9 PM.</strong></p>
        <p>Get your <a href="https://en.wikipedia.org/wiki/Linked_data">Linked Data</a> on!</p>
        <p><a href="https://github.com/danja/mcp-o">Source Repo (GitHub)</a></p>
    </section>
    <nav id="toc">
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#namespace">Namespace</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#rag-integration">RAG Integration Patterns</a></li>
        </ul>
    </nav>

    <section id="abstract">
        <h2>Abstract</h2>
        <p>The Model Context Protocol (MCP) Ontology provides a formal vocabulary for describing interactions between AI
            language models and external context providers. It defines core concepts for resources, tools, prompts and
            messaging that enable structured communication between AI systems and domain-specific data sources. </p>
    </section>

    <section id="files">
        <h2>Files</h2>
        <ul>
            <li><a href="mcp.ttl">Core Ontology</a></li>
            <li><a href="mcp-ontology.ttl">Extended Ontology</a></li>
            <li><a href="mcp-shapes.shacl">SHACL Shapes</a></li>
            <li><a href="sparql-examples.md">Example SPARQL SELECT queries (with a bit of Python)</a></li>
            <li><a href="sparql-example.js">Example JS with a SPARQL UPDATE</a></li>
        </ul>


        <section id="namespace">
            <h2>Namespace</h2>
            <p><a href="http://purl.org/stuff/mcp/"><code>http://purl.org/stuff/mcp/</code></a></p>
            <p>Preferred prefix: <strong><code>mcp</code></strong></p>
        </section>

        <section id="overview">
            <h2>Overview</h2>
            <p>This ontology models the key components of the Model Context Protocol ecosystem:</p>
            <dl>
                <dt>Servers</dt>
                <dd>Implementations that provide resources, tools and prompts to clients</dd>

                <dt>Clients</dt>
                <dd>Applications that connect to servers and facilitate interaction with language models</dd>

                <dt>Resources</dt>
                <dd>Contextual information made available to language models</dd>

                <dt>Tools</dt>
                <dd>Executable functions that allow models to perform actions</dd>

                <dt>Prompts</dt>
                <dd>Templates that structure interactions with language models</dd>
            </dl>
        </section>

        <section id="classes">
            <h2>Classes</h2>
            <dl>
                <dt>mcp:Server</dt>
                <dd>An MCP server implementation</dd>

                <dt>mcp:Client</dt>
                <dd>An MCP client implementation</dd>

                <dt>mcp:Resource</dt>
                <dd>A resource accessible via MCP</dd>

                <dt>mcp:Tool</dt>
                <dd>A tool callable via MCP</dd>

                <dt>mcp:Prompt</dt>
                <dd>A prompt template</dd>

                <dt>mcp:Message</dt>
                <dd>A message in an MCP conversation</dd>

                <dt>mcp:Content</dt>
                <dd>Content of an MCP message</dd>

                <dt>mcp:TextContent</dt>
                <dd>Text content in a message</dd>

                <dt>mcp:ImageContent</dt>
                <dd>Image content in a message</dd>

                <dt>mcp:Role</dt>
                <dd>Role of a participant in communication</dd>

                <dt>mcp:Capability</dt>
                <dd>A supported capability</dd>
            </dl>
        </section>

        <section id="properties">
            <h2>Properties</h2>
            <dl>
                <dt>mcp:hasCapability</dt>
                <dd>Links implementations to their capabilities</dd>

                <dt>mcp:providesResource</dt>
                <dd>Links servers to their resources</dd>

                <dt>mcp:providesTool</dt>
                <dd>Links servers to their tools</dd>

                <dt>mcp:providesPrompt</dt>
                <dd>Links servers to their prompts</dd>

                <dt>mcp:hasContent</dt>
                <dd>Links messages to their content</dd>

                <dt>mcp:hasRole</dt>
                <dd>Links messages to sender roles</dd>
            </dl>
        </section>

        <section id="rag-integration">
            <h2>RAG Integration Patterns</h2>
            <p>The MCP ontology supports Retrieval-Augmented Generation (RAG) through structured access to context
                resources. Here are key integration patterns:</p>

            <div class="example">
                <h3>Resource Discovery</h3>
                <pre>

PREFIX mcp: &lt;http://purl.org/stuff/mcp/&gt;

SELECT ?resource ?name ?type WHERE {
?server a mcp:Server ;
mcp:providesResource ?resource .
?resource mcp:name ?name ;
mcp:mimeType ?type .
}</pre>
</div>

            <div class="example">
                <h3>Tool Discovery</h3>
                <pre>

PREFIX mcp: &lt;http://purl.org/stuff/mcp/&gt;

SELECT ?tool ?desc WHERE {
?server mcp:providesTool ?tool .
?tool mcp:description ?desc .
FILTER(CONTAINS(LCASE(?desc), "text analysis"))
}</pre>
</div>

            <div class="example">
                <h3>Hybrid Search Implementation</h3>
                <p>Combining vector similarity with graph traversal:</p>
                <pre>

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

    return build_prompt(question, context)</pre>
            </div>

            <div class="example">
                <h3>Best Practices</h3>
                <ul>
                    <li>Use SPARQL property paths to traverse related resources</li>
                    <li>Maintain vector indices for text content</li>
                    <li>Cache frequent query patterns</li>
                    <li>Implement real-time updates through change notifications</li>
                    <li>Track resource versions in the graph</li>
                </ul>
            </div>
        </section>

        <footer>
            <p>Status: Testing<br>
                Version: 1.0.0<br>
                Date: 2024-12-01<br>
                License: <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></p>
            <p><a href="https://danny.ayers.name">Danny Ayers</a> & <a href="https://claude.ai">Claude</a></p>
        </footer>

</body>

</html>

================
File: LICENSE
================
MIT License

Copyright (c) 2024 Danny Ayers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

================
File: mcp-ontology.ttl
================
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix mcp: <http://purl.org/stuff/mcp/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix vann: <http://purl.org/vocab/vann/> .

# Ontology Definition

mcp: a owl:Ontology ;
dcterms:title "Model Context Protocol Ontology"@en ;
dcterms:description "Ontology for describing Model Context Protocol concepts and relationships"@en ;
dcterms:created "2024-03-01"^^xsd:date ;
vann:preferredNamespacePrefix "mcp" ;
vann:preferredNamespaceUri "http://purl.org/stuff/mcp/" ;
owl:versionInfo "1.0.0" .

# Core Classes

mcp:Server a owl:Class ;
rdfs:label "Server"@en ;
rdfs:comment "An MCP server implementation"@en .

mcp:Client a owl:Class ;
rdfs:label "Client"@en ;
rdfs:comment "An MCP client implementation"@en .

mcp:Resource a owl:Class ;
rdfs:label "Resource"@en ;
rdfs:comment "A resource accessible via MCP"@en .

mcp:Tool a owl:Class ;
rdfs:label "Tool"@en ;
rdfs:comment "A tool callable via MCP"@en .

mcp:Prompt a owl:Class ;
rdfs:label "Prompt"@en ;
rdfs:comment "A prompt template provided by an MCP server"@en .

mcp:Message a owl:Class ;
rdfs:label "Message"@en ;
rdfs:comment "A message in an MCP conversation"@en .

mcp:Content a owl:Class ;
rdfs:label "Content"@en ;
rdfs:comment "Content of an MCP message"@en .

mcp:TextContent a owl:Class ;
rdfs:subClassOf mcp:Content ;
rdfs:label "Text Content"@en ;
rdfs:comment "Text content in an MCP message"@en .

mcp:ImageContent a owl:Class ;
rdfs:subClassOf mcp:Content ;
rdfs:label "Image Content"@en ;
rdfs:comment "Image content in an MCP message"@en .

mcp:Role a owl:Class ;
rdfs:label "Role"@en ;
rdfs:comment "Role of a participant in MCP communication"@en .

mcp:Capability a owl:Class ;
rdfs:label "Capability"@en ;
rdfs:comment "A capability supported by an MCP implementation"@en .

# Properties

mcp:hasCapability a owl:ObjectProperty ;
rdfs:domain [
owl:unionOf (mcp:Server mcp:Client)
] ;
rdfs:range mcp:Capability ;
rdfs:label "has capability"@en .

mcp:providesResource a owl:ObjectProperty ;
rdfs:domain mcp:Server ;
rdfs:range mcp:Resource ;
rdfs:label "provides resource"@en .

mcp:providesTool a owl:ObjectProperty ;
rdfs:domain mcp:Server ;
rdfs:range mcp:Tool ;
rdfs:label "provides tool"@en .

mcp:providesPrompt a owl:ObjectProperty ;
rdfs:domain mcp:Server ;
rdfs:range mcp:Prompt ;
rdfs:label "provides prompt"@en .

mcp:hasContent a owl:ObjectProperty ;
rdfs:domain mcp:Message ;
rdfs:range mcp:Content ;
rdfs:label "has content"@en .

mcp:hasRole a owl:ObjectProperty ;
rdfs:domain mcp:Message ;
rdfs:range mcp:Role ;
rdfs:label "has role"@en .

mcp:text a owl:DatatypeProperty ;
rdfs:domain mcp:TextContent ;
rdfs:range xsd:string ;
rdfs:label "text"@en .

mcp:imageData a owl:DatatypeProperty ;
rdfs:domain mcp:ImageContent ;
rdfs:range xsd:base64Binary ;
rdfs:label "image data"@en .

mcp:mimeType a owl:DatatypeProperty ;
rdfs:domain [
owl:unionOf (mcp:Resource mcp:ImageContent)
] ;
rdfs:range xsd:string ;
rdfs:label "MIME type"@en .

mcp:uri a owl:DatatypeProperty ;
rdfs:domain mcp:Resource ;
rdfs:range xsd:anyURI ;
rdfs:label "URI"@en .

mcp:name a owl:DatatypeProperty ;
rdfs:domain [
owl:unionOf (mcp:Resource mcp:Tool mcp:Prompt)
] ;
rdfs:range xsd:string ;
rdfs:label "name"@en .

mcp:description a owl:DatatypeProperty ;
rdfs:domain [
owl:unionOf (mcp:Resource mcp:Tool mcp:Prompt)
] ;
rdfs:range xsd:string ;
rdfs:label "description"@en .

# Instances

mcp:UserRole a mcp:Role ;
rdfs:label "User"@en .

mcp:AssistantRole a mcp:Role ;
rdfs:label "Assistant"@en .

mcp:ResourcesCapability a mcp:Capability ;
rdfs:label "Resources Capability"@en .

mcp:ToolsCapability a mcp:Capability ;
rdfs:label "Tools Capability"@en .

mcp:PromptsCapability a mcp:Capability ;
rdfs:label "Prompts Capability"@en .

mcp:SamplingCapability a mcp:Capability ;
rdfs:label "Sampling Capability"@en .

================
File: mcp-shapes.shacl
================
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix mcp: <http://purl.org/stuff/mcp/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

mcp:ServerShape
a sh:NodeShape ;
sh:targetClass mcp:Server ;
sh:property [
sh:path mcp:hasCapability ;
sh:minCount 1 ;
sh:class mcp:Capability ;
] ;
sh:property [
sh:path mcp:providesResource ;
sh:class mcp:Resource ;
] ;
sh:property [
sh:path mcp:providesTool ;
sh:class mcp:Tool ;
] ;
sh:property [
sh:path mcp:providesPrompt ;
sh:class mcp:Prompt ;
] .

mcp:ClientShape
a sh:NodeShape ;
sh:targetClass mcp:Client ;
sh:property [
sh:path mcp:hasCapability ;
sh:minCount 1 ;
sh:class mcp:Capability ;
] .

mcp:ResourceShape
a sh:NodeShape ;
sh:targetClass mcp:Resource ;
sh:property [
sh:path mcp:uri ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:anyURI ;
sh:pattern "^[a-z]+://.+"
] ;
sh:property [
sh:path mcp:name ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:minLength 1 ;
] ;
sh:property [
sh:path mcp:mimeType ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:pattern "^[a-z]+/[-+.a-z0-9]+$"
] .

mcp:ToolShape
a sh:NodeShape ;
sh:targetClass mcp:Tool ;
sh:property [
sh:path mcp:name ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:minLength 1 ;
] ;
sh:property [
sh:path mcp:description ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
] .

mcp:PromptShape
a sh:NodeShape ;
sh:targetClass mcp:Prompt ;
sh:property [
sh:path mcp:name ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:minLength 1 ;
] ;
sh:property [
sh:path mcp:description ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
] .

mcp:MessageShape
a sh:NodeShape ;
sh:targetClass mcp:Message ;
sh:property [
sh:path mcp:hasContent ;
sh:minCount 1 ;
sh:class mcp:Content ;
] ;
sh:property [
sh:path mcp:hasRole ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:class mcp:Role ;
] .

mcp:TextContentShape
a sh:NodeShape ;
sh:targetClass mcp:TextContent ;
sh:property [
sh:path mcp:text ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:minLength 1 ;
] .

mcp:ImageContentShape
a sh:NodeShape ;
sh:targetClass mcp:ImageContent ;
sh:property [
sh:path mcp:imageData ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:base64Binary ;
] ;
sh:property [
sh:path mcp:mimeType ;
sh:minCount 1 ;
sh:maxCount 1 ;
sh:datatype xsd:string ;
sh:pattern "^image/[-+.a-z0-9]+$"
] .

mcp:RoleValueShape
a sh:NodeShape ;
sh:targetClass mcp:Role ;
sh:in (
mcp:UserRole
mcp:AssistantRole
) .

================
File: mcp.ttl
================
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix vann: <http://purl.org/vocab/vann/> .
@prefix vs: <http://www.w3.org/2003/06/sw-vocab-status/ns#> .
@prefix mcp: <http://purl.org/stuff/mcp/> .

<http://purl.org/stuff/mcp/>
a owl:Ontology ;
dcterms:title "Model Context Protocol Ontology"@en ;
dcterms:description """The Model Context Protocol (MCP) Ontology defines concepts and relationships
for describing interactions between AI language models and external context providers."""@en ;
dcterms:created "2024-03-01"^^xsd:date ;
dcterms:modified "2024-03-01"^^xsd:date ;
dcterms:publisher <https://modelcontextprotocol.io/> ;
dcterms:license <http://creativecommons.org/licenses/by/4.0/> ;
vann:preferredNamespacePrefix "mcp" ;
vann:preferredNamespaceUri "http://purl.org/stuff/mcp/" ;
owl:versionInfo "1.0.0" .

mcp:Server
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Server"@en ;
rdfs:comment "An MCP server implementation that provides resources, tools, and prompts to clients"@en ;
vs:term_status "stable" .

mcp:Client
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Client"@en ;
rdfs:comment "An MCP client implementation that connects to servers and facilitates interaction with language models"@en ;
vs:term_status "stable" .

mcp:Resource
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Resource"@en ;
rdfs:comment "A resource accessible via MCP, typically containing contextual information for language models"@en ;
vs:term_status "stable" .

mcp:Tool
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Tool"@en ;
rdfs:comment "A tool callable via MCP that provides specific functionality to language models"@en ;
vs:term_status "stable" .

mcp:Prompt
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Prompt"@en ;
rdfs:comment "A prompt template provided by an MCP server that structures interactions with language models"@en ;
vs:term_status "stable" .

mcp:Message
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Message"@en ;
rdfs:comment "A message exchanged in an MCP conversation between users and language models"@en ;
vs:term_status "stable" .

mcp:Content
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Content"@en ;
rdfs:comment "Content contained within an MCP message"@en ;
vs:term_status "stable" .

mcp:TextContent
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Text Content"@en ;
rdfs:comment "Textual content within an MCP message"@en ;
vs:term_status "stable" .

mcp:ImageContent
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Image Content"@en ;
rdfs:comment "Image content within an MCP message"@en ;
vs:term_status "stable" .

mcp:Role
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Role"@en ;
rdfs:comment "Role of a participant (user or assistant) in MCP communication"@en ;
vs:term_status "stable" .

mcp:Capability
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "Capability"@en ;
rdfs:comment "A capability supported by an MCP implementation"@en ;
vs:term_status "stable" .

# Properties

mcp:hasCapability
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "has capability"@en ;
rdfs:comment "Relates an MCP implementation to its supported capabilities"@en ;
vs:term_status "stable" .

mcp:providesResource
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "provides resource"@en ;
rdfs:comment "Relates a server to a resource it makes available"@en ;
vs:term_status "stable" .

mcp:providesTool
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "provides tool"@en ;
rdfs:comment "Relates a server to a tool it makes available"@en ;
vs:term_status "stable" .

mcp:providesPrompt
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "provides prompt"@en ;
rdfs:comment "Relates a server to a prompt template it makes available"@en ;
vs:term_status "stable" .

mcp:hasContent
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "has content"@en ;
rdfs:comment "Relates a message to its content"@en ;
vs:term_status "stable" .

mcp:hasRole
rdfs:isDefinedBy <http://purl.org/stuff/mcp/> ;
rdfs:label "has role"@en ;
rdfs:comment "Relates a message to the role of its sender"@en ;
vs:term_status "stable" .

================
File: README.md
================

# MCP Ontology

RDF/OWL representation of the [Model Context Protocol](https://modelcontextprotocol.io) for semantic integration with AI systems.

**Status 2024-12-01** : first draft

**[Documentation](http://hyperdata.it/xmlns/mcp)**

## Features

- OWL ontology for MCP concepts
- SHACL shapes for validation
- SPARQL examples for common queries
- RAG integration pattern
- Questionable JavaScript & Python snippets

## Artifacts

- [Core ontology](mcp.ttl)
- [Extended ontology](mcp-ontology.ttl)
- [SHACL validation rules](mcp-shapes.shacl)
- [Example SPARQL SELECT queries (with a bit of Python)](sparql-example.md)
- [Example JS with a SPARQL UPDATE](sparql-examples.js)

## License

[CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

_repomix -c repomix.config.json . _

================
File: sparql-example.js
================
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

const store = new Store();
await updateResourceGraph(store, updateQuery);

================
File: sparql-examples.md
================

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
