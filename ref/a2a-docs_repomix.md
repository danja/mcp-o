Contents of the A2A Documentation Repository

================================================================
File Summary
================================================================

Purpose:
--------
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

File Format:
------------
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

Usage Guidelines:
-----------------
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
- Pay special attention to the Repository Description. These contain important context and guidelines specific to this project.

Notes:
------
- Some files may have been excluded based on .gitignore rules and Repomix's
  configuration.
- Binary files are not included in this packed representation. Please refer to
  the Repository Structure section for a complete list of file paths, including
  binary files.
- Code comments have been removed.

Additional Info:
----------------
User Provided Header:
-----------------------
A2A Documents

For more information about Repomix, visit: https://github.com/yamadashy/repomix

================================================================
Directory Structure
================================================================
topics/
  a2a_and_mcp.md
  agent_discovery.md
  enterprise_ready.md
  push_notifications.md
_navbar.md
_sidebar.md
.gitignore
documentation.md
index.html
README.md
repomix.config.json

================================================================
Files
================================================================

================
File: topics/a2a_and_mcp.md
================
# A2A ❤️ MCP

**TLDR;** Agentic applications need both A2A and MCP. We recommend MCP for tools and A2A for agents.

<!-- TOC -->
- [A2A ❤️ MCP](#a2a--mcp)
    - [Why Protocols?](#why-protocols)
    - [Complementary](#complementary)
    - [Example](#example)
    - [Intersection](#intersection)

<!-- /TOC -->

## Why Protocols?
Standard protocols are essential for enabling agentic interoperability, particularly in connecting agents to external systems. This is critical in two interconnected areas of innovation: Tools and Agents.

**Tools** are primitives with structured inputs and outputs and (typically) well-known behavior. **Agents** are autonomous applications that can accomplish novel tasks by using tools, reasoning, and user interactions. Agentic applications must use both tools **and** agents to accomplish goals for their users.

## Complementary
[Model Context Protocol](https://modelcontextprotocol.io/) (MCP) is the emerging standard for connecting LLMs with data, resources, and tools. We already observe MCP standardizing ‘function calling’ across different models and frameworks. This is creating an ecosystem of tool service providers and dramatically lowering the complexity to connect agents with tools and data. We expect this trend to continue as more frameworks, service providers, and platforms adopt MCP.

A2A is focused on a different problem. A2A is an application level protocol that enables agents to collaborate in their natural modalities. It allows agents to communicate as *agents* (or as users) instead of as tools. We hope that A2A gains adoption as a complement to MCP that enables ecosystems of agents and will be working in the open with the community to make this happen.

## Example
Let’s look at an example:

*Consider an auto repair shop that fixes cars. The shop employs autonomous workers who use special-purpose tools (such as vehicle jacks, multimeters, and socket wrenches) to diagnose and repair problems. The workers often have to diagnose and repair problems they have not seen before. The repair process can involve extensive conversations with a customer, research, and working with part suppliers.*

Now let's model the shop employees as AI agents:

* MCP is the protocol to connect these agents with their structured tools (e.g. `raise platform by 2 meters`, `turn wrench 4 mm to the right`).

* A2A is the protocol that enables end-users or other agents to work with the shop employees (*"my car is making a rattling noise"*). A2A enables ongoing back-and-forth communication and an evolving plan to achieve results (*"send me a picture of the left wheel"*, *"I notice fluid leaking. How long has that been happening?"*). A2A also helps the auto shop employees work with other agents such as their part suppliers.

## Intersection
We recommend that applications model A2A agents as MCP resources (represented by their [AgentCard](/documentation.md#agent-card)). The frameworks can then use A2A to communicate with their user, the remote agents, and other agents.

![Agentic Application showing A2A and MCP together](../images/a2a_mcp.png)

================
File: topics/agent_discovery.md
================
# Discovering Agent (Card)s

<!-- TOC -->

- [Discovering Agent Cards](#discovering-agent-cards)
  - [Open Discovery](#open-discovery)
  - [Curated Discovery (Registry-Based)](#curated-discovery-registry-based)
  - [Private Discovery (API-Based)](#private-discovery-api-based)
  - [Securing Agent Cards](#securing-agent-cards)

<!-- /TOC -->

A2A's [AgentCard](/documentation.md#agent-card) standardizes the *format* of the data shared during discovery. However there are unlimited ways to discover these agent cards. We anticipate this being an open topic for discussion and look forward to ideas from the community.

Here is our current thinking.

## Open Discovery
We recommend enterprises host their agent cards at a well-known path. Specifically: https://`DOMAIN`/.well-known/agent.json. Clients will use DNS to resolve a known or found domain, send a simple `GET` request to the path, and receive the agent card.

This will enable web-crawlers and applications to easily discover agents for known or configured domains. This effectively reduces the discovery process to "find a domain".

## Curated Discovery (Registry-Based)
We anticipate enterprise applications making curated registries of agents available through a catalog interface. This opens up more enterprise scenarios such as company-specific or team-specific agent registries that are curated by an administrator.

*We **are** considering adding Registry support to the protocol - please drop us a [note](https://github.com/google/A2A/blob/main/README.md#contributing) with your opinion and where you see this being valuable as a standard*

## Private Discovery (API-Based)
There will undoubtably be private "agent stores" or proprietary agents where cards are exchanged behind custom APIs.

*We **are not** considering private discovery APIs as an A2A concern - please drop us a [note](https://github.com/google/A2A/blob/main/README.md#contributing) with your opinion and where you see this being valuable as a standard*

## Securing Agent Cards

Agent cards may contain sensitive information. Implementors may decide to secure their agent cards behind controls that require authentication and authorization. For example, within an organization, even an open discovery at a well-known path could be guarded by mTLS and restricted to specific clients. Registries and Private Discovery APIs should require authentication and return different artifacts for different identities.

Note that implementors may include credential information (such as API Keys) in their Agent Cards. It is recommended that this information is NEVER available without Authentication.

================
File: topics/enterprise_ready.md
================
# Enterprise Readiness

<!-- TOC -->

- [Enterprise Readiness](#enterprise-readiness)
    - [Transport Level Security](#transport-level-security)
    - [Server Identity](#server-identity)
    - [Client and User Identity](#client-and-user-identity)
    - [Authenticating Clients](#authenticating-clients)
    - [Authorization and Data Privacy](#authorization-and-data-privacy)
    - [Tracing and Observability](#tracing-and-observability)

<!-- /TOC -->

A2A **does not** want to invent any new standards for enterprise security and instead seamlessly integrate with existing infrastructure.

A2A models Enterprise Agents as standard, HTTP-based, enterprise applications and therefore relies on enterprise-standard auth, security, privacy, tracing, and monitoring. This is possible because A2A agents are opaque and do not share tools or resources (and therefore "single application" client/server best practices apply).

In fact, A2A keeps most enterprise concerns out of the protocol and instead require enterprise-grade HTTP with Open Authentication and Open Tracing support. Implementers should follow all enterprise best practices as it relates to application and user-level security.

## Transport Level Security
A2A is built on HTTP and any production installation should require HTTPS using modern TLS ciphers.

## Server Identity
A2A Servers present their identity in the form of digital certificates signed by well-known certificate authorities as part of the TLS negotiation. A2A Clients should verify server identity during connection establishment.

## Client and User Identity
There is no concept of a user or client identifier in A2A schemas. Instead, A2A conveys authentication requirements (scheme and materials) through the protocol. The client is responsible for negotiating with the appropriate authentication authority (out of band to A2A) and retrieving/storing credential materials (such as OAuth tokens). Those credential materials will be transmitted in HTTP headers and not in any A2A payload.

Different authentication protocols and service providers have different requirements and individual requests may require multiple identifiers and identities in scheme specific headers. It is recommended that clients always present a client identity (representing the client agent) and user identity (representing their user) in requests to A2A servers.

**Note**: Multi-identity federation is an open topic for discussion. For example, User U is working with Agent A requiring A-system's identifier. If Agent A then depends on Tool B or Agent B which requires B-system identifier, the user may need to provide identities for both A-system and B-system in a single request. (Assume A-system is an enterprise LDAP identity and B-system is a SaaS-provider identity).

It is currently recommended that if Agent A requires the user/client to provide an alternate identity for part of a task, it sends an update in the `INPUT-REQUIRED` state with the specific authentication requirements (in the same structure as an AgentCard's authentication requirements) to the client. The client then, out of band to A2A and also out of band to A-system, negotiates with B-system's authority to obtain credential material. Those materials (such as tokens) can be passed through Agent A to Agent B. Agent B will exchange when speaking to its upstream systems.

## Authenticating Clients
A2A servers are expected to publish supported and required authentication protocol(s) in its [Agent Card](/documentation.md#agent-card). These protocols should be one of the standard [OpenAPI Authentication formats](https://swagger.io/docs/specification/v3_0/authentication/) (such as API Keys, OAuth, OIDC, etc) but can be extended to another protocol supported by both client and server.

Individual authentication protocols have their own mechanisms for acquiring, refreshing, and challenging credential material (such as bearer or session tokens). The credential acquisition and maintenance process is considered external to A2A.

A2A servers are expected to authenticate **every** request and reject or challenge requests with standard HTTP response codes (401, 403), and authentication-protocol-specific headers and bodies (such as a HTTP 401 response with a [WWW-Authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) header indicating the required authentication schema, or OIDC discovery document at a well-known path).

## Authorization and Data Privacy
A2A servers are expected to authorize requests based on both the user and application identity. We recommend that individual agents manage access on at least two axes:

* **Skills**
Agents are expected to advertise (via an [Agent Card](/documentation.md#agent-card)) their capabilities in the form of skills. It is recommended that agents authorize on a per-skill basis (for example, OAuthScope 'foo-read-only' could limit access only to 'generateRecipe' skills).

* **Tools (Actions and Data)**
It is recommended that Agents restrict access to sensitive data or actions by placing them behind Tools. When an agentic flow or model needs to access this data, the agent should authorize access to a tool based on the application+user priviledge. We highly recommend utilizing API Management with Tool access.

## Tracing and Observability
As all A2A requests are 'standard' HTTP requests, both client and server should use their enterprise standard tooling and infrastructure which ideally adds appropriate instrumentation headers and writes events to standard logs and event queues.

================
File: topics/push_notifications.md
================
# Remote Agent to Client Updates

<!-- TOC -->

- [Remote Agent to Client Updates](#remote-agent-to-client-updates)
    - [Connected](#connected)
        - [Disconnected](#disconnected)
        - [Setting Task Notifications](#setting-task-notifications)
        - [Agent Security](#agent-security)
        - [Notification Receiver Security](#notification-receiver-security)
            - [Asymmetric keys](#asymmetric-keys)
            - [Symmetric keys](#symmetric-keys)
            - [OAuth](#oauth)
            - [Bearer Token](#bearer-token)
        - [Other Considerations](#other-considerations)
            - [Replay Prevention](#replay-prevention)
            - [Key Rotation](#key-rotation)

<!-- /TOC -->

Some tasks can take more than seconds. They can take minutes, or hours, or even days (*"ship a sample to my client in Florida and notify me when it arrives"*). A2A agents need to communicate over long periods of time. This includes while they are connected and not connected.

Clients can check whether an agent supports streaming and pushNotifications capability in the agent card.
<pre>
{
  "name": "your-agent-name",
  "description": "your-agent-description"
  ...

  "capabilities": {
    <b>"streaming": true,</b>
    <b>"pushNotifications": false,</b>
    "stateTransitionHistory": false
  }

  ...
}
</pre>

The agent can use below methods to get updates about task execution:
1. **Persistent Connection**: Clients can establish a persistent connection with the agent using HTTP + Server-sent events. The agent can then send task updates using those connections per client.

2. **Push Notifications**: Agents can send the latest full Task object payload to client specified push notification URL. This is similar to webhooks on some platforms.
Clients can set notifications for their tasks whether they have subscribed to a Task or not. Agents should send a notification when Agent has processed a task to a stopping state like "completed", "input-required" etc and fully generated state associated message and artifacts.

Clients can set notification info for their tasks whether they have subscribed to a Task or not. Agents should send a notification when Agent sees it appropriate to notify the client. One paradigm could be to send a notification when agent has processed a task to a stopping state like "completed", "input-required" etc and fully generated state associated message and artifacts.

## Connected
While connected, Agents update each other with Task (and related) messages. Clients and Remote Agents can work on multiple tasks concurrently over the same connection.

Clients use [Task/Send](/documentation.md#send-a-task) to update a current task with more information or reply to an agent need. Remote Agents reply with [Task Updates](/documentation.md#streaming-support) while streaming or [Task](/documentation.md#get-a-task) while not streaming. While not streaming, it is acceptable to poll at reasonable intervals.

If the agents become disconnected, they can resume the connection and receive live updates via the [Task/Resubscribe](/documentation.md#resubscribe-to-task) method.


## Disconnected
For disconnected scenarios, A2A supports a push notification mechanism whereby an Agent can notify a Client of an update outside of a connected session via a [PushNotificationConfig](/documentation.md#push-notifications). Within and across enterprises, it is critical that the agent verifies the identity of the notification service,  authenticates itself with the service, and presents an identifier that ties the notification to the executing task.

The NotificationService should be considered a separate service from the client agent, and it is not guaranteed or even expected to be the client directly. This NotificationService is responsible for authenticating and authorizing the agent and for proxying the verified notification to the appropriate endpoint (which could be anything from a pub/sub queue, to an email inbox, to another notification service, etc).

For contrived scenarios with isolated client-agent pairs (e.g. local service mesh in a contained VPC, etc.), the client may choose to simply open a port and act as its own NotificationService. However, any enterprise implementation is recommended to have a centralized service that authenticates the remote agents with trusted notification credentials and can handle online/offline scenarios. This can be thought of similarly to a mobile Push Notification Service with its own Authentication and Authorization controls.


## Setting Task Notifications
Clients need to set task push notification config to asynchronously receive task updates. They should generate a taskId and set the push notification configuration for the same using “tasks/pushNotification/set” RPC or directly in the `pushNotification` param of "tasks/send", "tasks/sendSubscribe".


<pre>
interface PushNotificationConfig {
  url: string;
  token?: string; // token unique to this task/session
  authentication?: {
    schemes: string[];
    credentials?: string;
  }
}

interface TaskPushNotificationConfig {
  id: string; //task id
  pushNotificationConfig: PushNotificationConfig;
}

// Request to send to a task (with push notification configuration)
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "tell me a joke"
      }]
    },
    "pushNotification": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    },
    "metadata": {}
  }
}

//response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed",
    },
    "artifacts": [{
      "name":"joke",
      "parts": [{
          "type":"text",
          "text":"Why did the chicken cross the road? To get to the other side!"
        }]
      }],
    "metadata": {}
  }
}

// Request to set push notification config
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/set",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    }
  }
}

//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    }
  }
}
</pre>

## Agent Security
Agents should not blindly trust the push notification URL specified by the client. Some commonly used practices are as below:

1. They should verify the push notification URL by issuing a GET challenge request.
    * The challenge request can be the same push notification URL but with a validationToken provided either as a URL query param or a header.
    * The notification service (or the client in simple cases) should respond to challenge request by returning the same validationToken.
    * This seems simple but it helps avoid tricking remote agent into DDOS-ing a URL by a malicious client.
    * Agents can issue this challenge request one-time when the push notification url is registered or keep checking this URL periodically.
    <pre>
    GET https://abc.com/callback-path?validationToken=randomString
    Content-Length: 0

    HTTP/1.1 200 OK
    Content-Type: text/plain

    randomString
    </pre>

    An example of such check has been added in method `set_push_notification_info` of [LangGraph](https://github.com/google/A2A/blob/main/samples/python/agents/langgraph/task_manager.py) and [CLI Push listener](https://github.com/google/A2A/blob/main/samples/python/hosts/cli/push_notification_listener.py)

2. To further verify the identity of the notification service, it can be asked to sign the above validationToken using a pre-determined secret.
    * The secret could be generated by the agent, specifically for this challenge request.
    * Or if the notification service and agent use a symmetric shared key for authentication, the same key can be used by notification service to sign the validationToken.

## Notification Receiver Security
Notification Receivers should check the authenticity of the notifications they are receiving. A few ways they can do that are described as follows. Also, a collection of ideas for notification security can be found at https://webhooks.fyi

An example of push notifications using JWT + JWKS using assymetric keys has been added in [LangGraph](https://github.com/google/A2A/blob/main/samples/python/agents/langgraph/__main__.py) and [CLI Host](https://github.com/google/A2A/blob/main/samples/python/hosts/cli/__main__.py)

#### Asymmetric keys
A pair of private and public keys can be generated using ECDSA, RSA etc. These can be generated by the notification server or the remote agent.
1. If the key pair is generated by the notification server, (ex. APNS), the private key needs to be supplied to the agent. The notification server should keep the public key to verify incoming request payloads signed by the agent using the private key.
2. If the key pair is generated by the agent. Then there can be two options:
    * The public key is manually provided to the Notification Receiver.
    * Or the public keys can be provided by the agent through JWKS protocol.

Agents can sign request payload using the private key and provide the request signature as a header. Or they can use JWT protocol to generate a token and provide that as a signature. Benefit of JWT protocol would also be that it standardises common fields like keyId, request timestamp.

#### Symmetric keys
A simpler method can be that both notification server and agents use the same shared key to sign and verify. The notification server verifies the signature by re-signing the payload with the key. Again JWT can be used to generate the signature token.

Asymmetric keys have an advantage as only the agent knows the public key and hence less chances of the key being leaked.

#### OAuth
Agent gets an auth token from OAuth server and supplies that in the push notification request, either as a header or as part of request payload. Notification server extracts the OAuth token and verifies it from the OAuth server.

#### Bearer Token
Either party can generate the bearer token. If generated by the Notification Receiver, it can provide this token to the remote agent through the task push notification configuration.

Since this is part of a request in plain-text, this has a chance of being leaked and hence malicious request payloads can be sent with this token. With asymmetric or symmetric keys, the payload was signed, which allowed Notification Receivers to verify authenticity of request payloads.

## Other Considerations
#### Replay Prevention
Use iat in JWT or other header to describe the event timestamp. Ideally any event older than 5 mins should be rejected. This provides some protection from replay attacks.
The timestamp should also be part of the overall request data which is fed into calculation of request signature. This validates the authenticity of timestamps as well.
#### Key Rotation
Ideally agents should implement a key rotation with zero downtime. One way to do this is JWKS, it allows agents to publish their public keys, both old and new. Notification Receivers should be able to use both the keys to validate the notification request payload.

================
File: _navbar.md
================
* [Github repo](https://github.com/google/A2A)
* [Blog](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)
* [Sample Agents](https://github.com/google/A2A/tree/main/samples)
  * [Google Agent Developer Kit (ADK)](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk/README.md)
  * [CrewAI](https://github.com/google/A2A/tree/main/samples/python/agents/crewai/README.md)
  * [LangGraph](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph/README.md)
  * [Genkit](https://github.com/google/A2A/tree/main/samples/js/src/agents/README.md)

================
File: _sidebar.md
================
<!-- docs/_sidebar.md -->

* [Home](/)
* [Blog Post](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)
* [Technical Documentation](documentation.md)
* Review Key Topics
  * [A2A and MCP](topics/a2a_and_mcp.md)
  * [Agent Discovery](topics/agent_discovery.md)
  * [Enterprise Ready](topics/enterprise_ready.md)
  * [Push Notifications](topics/push_notifications.md)
* [Json Specification](https://github.com/google/A2A/tree/main/specification/json)
* [Samples to see A2A in action](https://github.com/google/A2A/tree/main/samples)
  * [Sample A2A Client/Server](https://github.com/google/A2A/tree/main/samples/python/common)
  * [Multi-Agent Web App](https://github.com/google/A2A/tree/main/demo/README.md)
  * [CLI](https://github.com/google/A2A/blob/main/samples/python/hosts/cli/README.md)
* [Sample Agents](https://github.com/google/A2A/tree/main/samples)
  * [Google Agent Developer Kit (ADK)](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk/README.md)
  * [CrewAI](https://github.com/google/A2A/tree/main/samples/python/agents/crewai/README.md)
  * [LangGraph](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph/README.md)
  * [Genkit](https://github.com/google/A2A/tree/main/samples/js/src/agents/README.md)

================
File: .gitignore
================
.DS_Store

================
File: documentation.md
================
# Agent2Agent Protocol (A2A)

An open protocol enabling Agent-to-Agent interoperability, bridging the gap between **opaque** agentic systems.
<img src="images/a2a_actors.png" width="70%" style="margin:20px auto;display:block;">

<!-- TOC -->

- [Agent2Agent Protocol A2A](#agent2agent-protocol-a2a)
  - [Feedback and Changes](#feedback-and-changes)
  - [Key Principles](#key-principles)
  - [More Detailed Discussions](#more-detailed-discussions)
  - [Overview](#overview)
    - [Actors](#actors)
    - [Transport](#transport)
    - [Authentication and Authorization](#authentication-and-authorization)
  - [Agent Card](#agent-card)
    - [Discovery](#discovery)
    - [Representation](#representation)
  - [Agent-to-Agent Communication](#agent-to-agent-communication)
  - [Core Objects](#core-objects)
    - [Task](#task)
    - [Artifact](#artifact)
    - [Message](#message)
    - [Part](#part)
    - [Push Notifications](#push-notifications)
- [Sample Methods and JSON Responses](#sample-methods-and-json-responses)
  - [Agent Card](#agent-card)
  - [Send a Task](#send-a-task)
  - [Get a Task](#get-a-task)
  - [Cancel a Task](#cancel-a-task)
  - [Set Task Push Notifications](#set-task-push-notifications)
  - [Get Task Push Notifications](#get-task-push-notifications)
  - [Multi-turn Conversations](#multi-turn-conversations)
  - [Streaming Support](#streaming-support)
    - [Resubscribe to Task](#resubscribe-to-task)
  - [Non-textual Media](#non-textual-media)
  - [Structured output](#structured-output)
  - [Error Handling](#error-handling)

<!-- /TOC -->

## Feedback and Changes

A2A is a work in progress and is expected to change based on community feedback. This repo contains the initial specification, documentation, and [sample code](https://github.com/google/A2A/tree/main/samples). We will continue to update this repo with more features, more examples, specs, and libraries as they become available. When the spec and samples can graduate to a production quality SDK, we will declare version 1.0 and maintain stable releases.

## Key Principles

Using A2A, agents accomplish tasks for end-users without sharing memory, thoughts, or tools. Instead the agents exchange context, status, instructions, and data in their native modalities.

- **Simple**: Reuse existing standards
- **Enterprise Ready**: Auth, Security, Privacy, Tracing, Monitoring
- **Async First**: (Very) Long running-tasks and human-in-the-loop
- **Modality Agnostic**: text, audio/video, forms, iframe, etc.
- **Opaque Execution**: Agents do not have to share thoughts, plans, or tools.

### More Detailed Discussions

- [A2A and MCP](topics/a2a_and_mcp.md?id=a2a-❤%ef%b8%8f-mcp)
- [Enterprise Ready](topics/enterprise_ready.md?id=enterprise-readiness)
- [Push Notifications](topics/push_notifications.md?id=remote-agent-to-client-updates)
- [Agent Discovery](topics/agent_discovery.md?id=discovering-agent-cards)

## Overview

### Actors

The A2A protocol has three actors:

- **User**
  The end-user (human or service) that is using an agentic system to accomplish tasks.
- **Client**
  The entity (service, agent, application) that is requesting an action from an opaque agent on behalf of the user.
- **Remote Agent (Server)**
  The opaque ("blackbox") agent which is the A2A server.

### Transport

The protocol leverages HTTP for transport between the client and the remote agent. Depending on the capabilities of the client and the remote agent, they may leverage SSE for supporting streaming for receiving updates from the server.

A2A leverages [JSON-RPC 2.0](https://www.jsonrpc.org/specification) as the data exchange format for communication between a Client and a Remote Agent.

### Async

A2A clients and servers can use standard request/response patterns and poll for updates. However, A2A also supports streaming updates through SSE (while connected) and receiving [push notifications](/topics/push_notifications.md?id=remote-agent-to-client-updates) while disconnected.

### Authentication and Authorization

A2A models agents as enterprise applications (and can do so because A2A agents are opaque and do not share tools and resources). This quickly brings enterprise-readiness to agentic interop.

A2A follows [OpenAPI’s Authentication specification](https://swagger.io/docs/specification/v3_0/authentication/) for authentication. Importantly, A2A agents do not exchange identity information within the A2A protocol. Instead, they obtain materials (such as tokens) out of band and transmit materials in HTTP headers and not in A2A payloads.

While A2A does not transmit identity in-band, servers do send authentication requirements in A2A payloads. At minimum, servers are expected to publish their requirements in their [Agent Card](#agent-card). Thoughts about discovering agent cards are in [this topic](topics/agent_discovery.md?id=discovering-agent-cards).

Clients should use one of the servers published authentication protocols to authenticate their identity and obtain credential material. A2A servers should authenticate **every** request and reject or challenge requests with standard HTTP response codes (401, 403), and authentication-protocol-specific headers and bodies (such as a HTTP 401 response with a [WWW-Authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) header indicating the required authentication schema, or OIDC discovery document at a well-known path). More details discussed in [Enterprise Ready](topics/enterprise_ready.md).

> Note: If an agent requires that the client/user provide additional credentials during execution of a task (for example, to use a specific tool), the agent should return a task status of `Input-Required` with the payload being an Authentication structure. The client should, again, obtain credential material out of band to A2A.

## Agent Card

Remote Agents that support A2A are required to publish an **Agent Card** in JSON format describing the agent’s capabilities/skills and authentication mechanism. Clients use the Agent Card information to identify the best agent that can perform a task and leverage A2A to communicate with that remote agent.

### Discovery

We recommend agents host their Agent Card at https://`base url`/.well-known/agent.json. This is compatible with a DNS approach where the client finds the server IP via DNS and sends an HTTP GET to retrieve the agent card. We also anticipate that systems will maintain private registries (e.g. an ‘Agent Catalog’ or private marketplace, etc). More discussion can be found in [this document](topics/agent_discovery.md?id=discovering-agent-cards).

### Representation

Following is the proposed representation of an Agent Card

```typescript
// An AgentCard conveys key information:
// - Overall details (version, name, description, uses)
// - Skills: A set of capabilities the agent can perform
// - Default modalities/content types supported by the agent.
// - Authentication requirements
interface AgentCard {
  // Human readable name of the agent.
  // (e.g. "Recipe Agent")
  name: string;
  // A human-readable description of the agent. Used to assist users and
  // other agents in understanding what the agent can do.
  // (e.g. "Agent that helps users with recipes and cooking.")
  description: string;
  // A URL to the address the agent is hosted at.
  url: string;
  // The service provider of the agent
  provider?: {
    organization: string;
    url: string;
  };
  // The version of the agent - format is up to the provider. (e.g. "1.0.0")
  version: string;
  // A URL to documentation for the agent.
  documentationUrl?: string;
  // Optional capabilities supported by the agent.
  capabilities: {
    streaming?: boolean; // true if the agent supports SSE
    pushNotifications?: boolean; // true if the agent can notify updates to client
    stateTransitionHistory?: boolean; //true if the agent exposes status change history for tasks
  };
  // Authentication requirements for the agent.
  // Intended to match OpenAPI authentication structure.
  authentication: {
    schemes: string[]; // e.g. Basic, Bearer
    credentials?: string; //credentials a client should use for private cards
  };
  // The set of interaction modes that the agent
  // supports across all skills. This can be overridden per-skill.
  defaultInputModes: string[]; // supported mime types for input
  defaultOutputModes: string[]; // supported mime types for output
  // Skills are a unit of capability that an agent can perform.
  skills: {
    id: string; // unique identifier for the agent's skill
    name: string; //human readable name of the skill
    // description of the skill - will be used by the client or a human
    // as a hint to understand what the skill does.
    description: string;
    // Set of tagwords describing classes of capabilities for this specific
    // skill (e.g. "cooking", "customer support", "billing")
    tags: string[];
    // The set of example scenarios that the skill can perform.
    // Will be used by the client as a hint to understand how the skill can be
    // used. (e.g. "I need a recipe for bread")
    examples?: string[]; // example prompts for tasks
    // The set of interaction modes that the skill supports
    // (if different than the default)
    inputModes?: string[]; // supported mime types for input
    outputModes?: string[]; // supported mime types for output
  }[];
}
```

## Agent-to-Agent Communication

The communication between a Client and a Remote Agent is oriented towards **_task completion_** where agents collaboratively fulfill an end-user’s request. A Task object allows a Client and a Remote Agent to collaborate for completing the submitted task.

A task can be completed by a remote agent immediately or it can be long-running. For long-running tasks, the client may poll the agent for fetching the latest status. Agents can also push notifications to the client via SSE (if connected) or through an external notification service.

## Core Objects

### Task

A Task is a stateful entity that allows Clients and Remote Agents to achieve a specific outcome and generate results. Clients and Remote Agents exchange Messages within a Task. Remote Agents generate results as Artifacts.

A Task is always created by a Client and the status is always determined by the Remote Agent. Multiple Tasks may be part of a common session (denoted by optional sessionId) if required by the client. To do so, the Client sets an optional sessionId when creating the Task.

The agent may:

- fulfill the request immediately
- schedule work for later
- reject the request
- negotiate a different modality
- ask the client for more information
- delegate to other agents and systems

Even after fulfilling the goal, the client can request more information or a change in the context of that same Task. (For example client: "draw a picture of a rabbit", agent: "&lt;picture&gt;", client: "make it red").

Tasks are used to transmit [Artifacts](#artifact) (results) and [Messages](#message) (thoughts, instructions, anything else). Tasks maintain a status and an optional history of status and Messages.

```typescript
interface Task {
  id: string; // unique identifier for the task
  sessionId: string; // client-generated id for the session holding the task.
  status: TaskStatus; // current status of the task
  history?: Message[];
  artifacts?: Artifact[]; // collection of artifacts created by the agent.
  metadata?: Record<string, any>; // extension metadata
}
// TaskState and accompanying message.
interface TaskStatus {
  state: TaskState;
  message?: Message; //additional status updates for client
  timestamp?: string; // ISO datetime value
}
// sent by server during sendSubscribe or subscribe requests
interface TaskStatusUpdateEvent {
  id: string;
  status: TaskStatus;
  final: boolean; //indicates the end of the event stream
  metadata?: Record<string, any>;
}
// sent by server during sendSubscribe or subscribe requests
interface TaskArtifactUpdateEvent {
  id: string;
  artifact: Artifact;
  metadata?: Record<string, any>;
}
// Sent by the client to the agent to create, continue, or restart a task.
interface TaskSendParams {
  id: string;
  sessionId?: string; //server creates a new sessionId for new tasks if not set
  message: Message;
  historyLength?: number; //number of recent messages to be retrieved
  // where the server should send notifications when disconnected.
  pushNotification?: PushNotificationConfig;
  metadata?: Record<string, any>; // extension metadata
}
type TaskState =
  | "submitted"
  | "working"
  | "input-required"
  | "completed"
  | "canceled"
  | "failed"
  | "unknown";
```

### Artifact

Agents generate Artifacts as an end result of a Task. Artifacts are immutable, can be named, and can have multiple parts. A streaming response can append parts to existing Artifacts.

A single Task can generate many Artifacts. For example, "create a webpage" could create separate HTML and image Artifacts.

```typescript
interface Artifact {
  name?: string;
  description?: string;
  parts: Part[];
  metadata?: Record<string, any>;
  index: number;
  append?: boolean;
  lastChunk?: boolean;
}
```

### Message

A Message contains any content that is not an Artifact. This can include things like agent thoughts, user context, instructions, errors, status, or metadata.

All content from a client comes in the form of a Message. Agents send Messages to communicate status or to provide instructions (whereas generated results are sent as Artifacts).

A Message can have multiple parts to denote different pieces of content. For example, a user request could include a textual description from a user and then multiple files used as context from the client.

```typescript
interface Message {
  role: "user" | "agent";
  parts: Part[];
  metadata?: Record<string, any>;
}
```

### Part

A fully formed piece of content exchanged between a client and a remote agent as part of a Message or an Artifact. Each Part has its own content type and metadata.

```typescript
interface TextPart {
  type: "text";
  text: string;
}
interface FilePart {
  type: "file";
  file: {
    name?: string;
    mimeType?: string;
    // oneof {
    bytes?: string; //base64 encoded content
    uri?: string;
    //}
  };
}
interface DataPart {
  type: "data";
  data: Record<string, any>;
}
type Part = (TextPart | FilePart | DataPart) & {
  metadata: Record<string, any>;
};
```

### Push Notifications

A2A supports a secure notification mechanism whereby an agent can notify a client of an update outside of a connected session via a PushNotificationService. Within and across enterprises, it is critical that the agent verifies the identity of the notification service, authenticates itself with the service, and presents an identifier that ties the notification to the executing Task.

The target server of the PushNotificationService should be considered a separate service, and is not guaranteed (or even expected) to be the client directly. This PushNotificationService is responsible for authenticating and authorizing the agent and for proxying the verified notification to the appropriate endpoint (which could be anything from a pub/sub queue, to an email inbox or other service, etc).

For contrived scenarios with isolated client-agent pairs (e.g. local service mesh in a contained VPC, etc.) or isolated environments without enterprise security concerns, the client may choose to simply open a port and act as its own PushNotificationService. Any enterprise implementation will likely have a centralized service that authenticates the remote agents with trusted notification credentials and can handle online/offline scenarios. (This should be thought of similarly to a mobile Push Notification Service).

```typescript
interface PushNotificationConfig {
  url: string;
  token?: string; // token unique to this task/session
  authentication?: {
    schemes: string[];
    credentials?: string;
  };
}
interface TaskPushNotificationConfig {
  id: string; //task id
  pushNotificationConfig: PushNotificationConfig;
}
```

# Sample Methods and JSON Responses

## Agent Card

```json
//agent card
{
  "name": "Google Maps Agent",
  "description": "Plan routes, remember places, and generate directions",
  "url": "https://maps-agent.google.com",
  "provider": {
    "organization": "Google",
    "url": "https://google.com"
  },
  "version": "1.0.0",
  "authentication": {
    "schemes": "OAuth2"
  },
  "defaultInputModes": ["text/plain"],
  "defaultOutputModes": ["text/plain", "application/html"],
  "capabilities": {
    "streaming": true,
    "pushNotifications": false
  },
  "skills": [
    {
      "id": "route-planner",
      "name": "Route planning",
      "description": "Helps plan routing between two locations",
      "tags": ["maps", "routing", "navigation"],
      "examples": [
        "plan my route from Sunnyvale to Mountain View",
        "what's the commute time from Sunnyvale to San Francisco at 9AM",
        "create turn by turn directions from Sunnyvale to Mountain View"
      ],
      // can return a video of the route
      "outputModes": ["application/html", "video/mp4"]
    },
    {
      "id": "custom-map",
      "name": "My Map",
      "description": "Manage a custom map with your own saved places",
      "tags": ["custom-map", "saved-places"],
      "examples": [
        "show me my favorite restaurants on the map",
        "create a visual of all places I've visited in the past year"
      ],
      "outputModes": ["application/html"]
    }
  ]
}
```

## Send a Task

Allows a client to send content to a remote agent to start a new Task, resume an interrupted Task or reopen a completed Task. A Task interrupt may be caused due to an agent requiring additional user input or a runtime error.

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "tell me a joke"
      }]
    },
    "metadata": {}
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed",
    },
    "artifacts": [{
      "name":"joke",
      "parts": [{
          "type":"text",
          "text":"Why did the chicken cross the road? To get to the other side!"
        }]
      }],
    "metadata": {}
  }
}
```

## Get a Task

Clients may use this method to retrieve the generated Artifacts for a Task. The agent determines the retention window for Tasks previously submitted to it. An agent may return an error code for Tasks that were past the retention window for an agent or for Tasks that are short-lived and not persisted by the agent.

The client may also request the last N items of history of the Task which will include all Messages, in order, sent by client and server. By default this is 0 (no history).

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/get",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "historyLength": 10,
    "metadata": {}
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed"
    },
    "artifacts": [{
      "parts": [{
        "type":"text",
        "text":"Why did the chicken cross the road? To get to the other side!"
      }]
    }],
    "history":[
      {
        "role": "user",
        "parts": [
          {
            "type": "text",
            "text": "tell me a joke"
          }
        ]
      }
    ],
    "metadata": {}
  }
}
```

## Cancel a Task

A client may choose to cancel previously submitted Tasks as shown below.

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/cancel",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "metadata": {}
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "canceled"
    },
    "metadata": {}
  }
}
```

## Set Task Push Notification Config

Clients may configure a push notification URL for receiving an update on Task status change.

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/set",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}
```

## Get Task Push Notification Config

Clients may retrieve the currently configured push notification configuration for a Task using this method.

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/get",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64"
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}
```

## Multi-turn Conversations

A Task may pause to be executed on the remote agent if it requires additional user input. When a Task is in `input-required` state, the client is required to provide additional input for the Task to resume processing on the remote agent.

The Message included in the `input-required` state must include the details indicating what the client must do. For example "fill out a form" or "log into SaaS service foo". If this includes structured data, the instruction should be sent as one `Part` and the structured data as a second `Part`.

```json
//Request - seq 1
{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "request a new phone for me"
      }]
    },
    "metadata": {}
  }
}
//Response - seq 2
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "input-required",
      "message": {
        "role":"agent",
        "parts": [{
          "type":"text",
          "text":"Select a phone type (iPhone/Android)"
        }]
      }
    },
    "metadata": {}
  }
}
//Request - seq 3
{
  "jsonrpc": "2.0",
  "id": 2,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "Android"
      }]
    },
    "metadata": {}
  }
}
//Response - seq 4
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "id": 1,
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed"
    },
    "artifacts": [{
      "name": "order-confirmation",
      "parts": [{
          "type":"text",
          "text":"I have ordered a new Android device for you. Your request number is R12443"
        }],
      "metadata": {}
    }],
    "metadata": {}
  }
}
```

## Streaming Support

For clients and remote agents capable of communicating over HTTP with SSE, clients can send the RPC request with method `tasks/sendSubscribe` when creating a new Task. The remote agent can respond with a stream of TaskStatusUpdateEvents (to communicate status changes or instructions/requests) and TaskArtifactUpdateEvents (to stream generated results).
Note that TaskArtifactUpdateEvents can append new parts to existing Artifacts. Clients
can use `task/get` to retrieve the entire Artifact outside of the streaming.
Agents must set final: true attribute at the end of the stream or if the agent is interrupted and require additional user input.

```json
//Request
{
  "method":"tasks/sendSubscribe",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "write a long paper describing the attached pictures"
      },{
        "type":"file",
        "file": {
           "mimeType": "image/png",
           "data":"<base64-encoded-content>"
        }
      }]
    },
    "metadata": {}
  }
}

//Response
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "working",
      "timestamp":"2025-04-02T16:59:25.331844"
    },
    "final": false
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 1...>"}
      ],
      "index": 0,
      "append": false,
      "lastChunk": false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 2...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk": false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 3...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk": true
    ]
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "completed",
      "timestamp":"2025-04-02T16:59:35.331844"
    },
    "final": true
  }
}
```

### Resubscribe to Task

A disconnected client may resubscribe to a remote agent that supports streaming to receive Task updates via SSE.

```json
//Request
{
  "method":"tasks/resubscribe",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "metadata": {}
  }
}
//Response
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "artifact":[
      "parts": [
        {"type":"text", "text": "<section 2...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk":false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "artifact":[
      "parts": [
        {"type":"text", "text": "<section 3...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk": true
    ]
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "completed",
      "timestamp":"2025-04-02T16:59:35.331844"
    },
    "final": true
  }
}
```

## Non-textual Media

Following is an example interaction between a client and an agent with non-textual data.

```json
//Request - seq 1
{
  "jsonrpc": "2.0",
  "id": 9,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "Analyze the attached report and generate high level overview"
      },{
        "type":"file",
        "file": {
           "mimeType": "application/pdf",
           "data":"<base64-encoded-content>"
        }
      }]
    },
    "metadata": {}
  }
}
//Response - seq 2
{
  "jsonrpc": "2.0",
  "id": 9,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "working",
      "message": {
        "role": "agent",
        "parts": [{
          "type":"text",
          "text":"analysis in progress, please wait"
        }],
        "metadata": {}
       }
     },
    "metadata": {}
  }
}
//Request - seq 3
{
  "jsonrpc": "2.0",
  "id": 10,
  "method":"tasks/get",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "metadata": {}
  }
}
//Response - seq 4
{
  "jsonrpc": "2.0",
  "id": 9,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed"
     },
    "artifacts": [{
      "parts": [{
        "type":"text",
        "text":"<generated analysis content>"
       }],
       "metadata": {}
     }],
    "metadata": {}
  }
}
```

## Structured output

Both the client or the agent can request structured output from the other party.

```json
//Request
{
  "jsonrpc": "2.0",
  "id": 9,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "Show me a list of my open IT tickets",
        "metadata": {
          "mimeType": "application/json",
          "schema": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ticketNumber": { "type": "string" },
                "description": { "type": "string" }
              }
            }
          }
        }
      }]
    },
    "metadata": {}
  }
}
//Response
{
  "jsonrpc": "2.0",
  "id": 9,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed",
      "timestamp": "2025-04-17T17:47:09.680794"
    },
    "artifacts": [
      {
        "parts": [
          {
            "type": "text",
            "text": "[{\"ticketNumber\":\"REQ12312\",\"description\":\"request for VPN access\"},{\"ticketNumber\":\"REQ23422\",\"description\":\"Add to DL - team-gcp-onboarding\"}]"
          }
        ],
        "index": 0
      }
    ]
  }
}
```

## Error Handling

Following is the ErrorMessage format for the server to respond to the client when it encounters an error processing the client request.

```typescript
interface ErrorMessage {
  code: number;
  message: string;
  data?: any;
}
```

The following are the standard JSON-RPC error codes that the server can respond with for error scenarios:

| Error Code         | Message          | Description                                      |
| :----------------- | :--------------- | :----------------------------------------------- |
| \-32700            | JSON parse error | Invalid JSON was sent                            |
| \-32600            | Invalid Request  | Request payload validation error                 |
| \-32601            | Method not found | Not a valid method                               |
| \-32602            | Invalid params   | Invalid method parameters                        |
| \-32603            | Internal error   | Internal JSON-RPC error                          |
| \-32000 to \-32099 | Server error     | Reserved for implementation specific error codes |
| \-32001            | Task not found   | Task not found with the provided id              |
| \-32002            | Task cannot be canceled  | Task cannot be canceled by the remote agent|
| \-32003            | Push notifications not supported | Push Notification is not supported by the agent|
| \-32004            | Unsupported operation   | Operation is not supported                        |
| \-32005            | Incompatible content types   | Incompatible content types between client and an agent  |

================
File: index.html
================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Agent2Agent Protocol</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="An open protocol enabling communication and interoperability between opaque agentic applications.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/dark.css" media="(prefers-color-scheme: dark)">

</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      loadSidebar: true,
      loadNavbar: true,
      logo: '/images/a2a_logo.png',
      nameLink: "/docs/slug",
      name: '',
      repo: '',
      subMaxLevel: 2,
    }
  </script>

  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-python.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-typescript.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-json.min.js"></script>
</body>
</html>

================
File: README.md
================
![image info](images/a2a_banner.png)

## Unlock Collaborative, agent to agent scenarios with a new open protocol

<img src="images/a2a_main.png" width="70%" style="margin:20px auto;display:block;">

* **Seamless Agent Collaboration**: Introduces a standard protocol for autonomous, opaque agents built on different frameworks and by various vendors to communicate and collaborate effectively with each other and with users, addressing the current lack of agent interoperability.
* **Simplifies Enterprise Agent Integration**: Provides a straightforward way to integrate intelligent agents into existing enterprise applications, allowing businesses to leverage agent capabilities across their technology landscape.
* **Supports Key Enterprise Requirements**: Offers core functionalities essential for secure, enterprise-grade agent ecosystems, including capability discovery, user experience negotiation, task and state management, and secure collaboration.

## Open standards for connecting Agents

<img src="images/a2a_mcp_readme.png" width="70%" style="margin:20px auto;display:block;">

* **MCP (Model Context Protocol)** for tools and resources
  * Connect agents to tools, APIs, and resources with structured inputs/outputs.
  * Google ADK supports MCP tools. Enabling wide range of MCP servers to be used with agents.
* **A2A (Agent2Agent Protocol)** for agent-agent collaboration
  * Dynamic, multimodal communication between different agents without sharing memory, resources, and tools
  * Open standard driven by community.
  * Samples available using Google ADK, LangGraph, Crew.AI

## Feedback and Changes

A2A is a work in progress and is expected to change based on community feedback. This repo contains the initial specification, documentation, and [sample code](https://github.com/google/A2A/tree/main/samples). We will continue to update this repo with more features, more examples, specs, and libraries as they become available. When the spec and samples can graduate to a production quality SDK, we will declare version 1.0 and maintain stable releases.

To understand A2A design principles and external partners supporting A2A, [public blog post](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)

Interested to contribute and know more about the internals of A2A protocol ? [Github](https://github.com/google/A2A)

================
File: repomix.config.json
================
{
    "output": {
        "filePath": "./a2a_repomix.md",
        "headerText": "A2A Documents",
        "removeComments": true
    },
    "ignore": {
        "useDefaultPatterns": true,
        "customPatterns": []
    }
}
