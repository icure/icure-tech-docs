# Message

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message" method="post" summary="Creates a message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Message" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/{messageId}/delegate/{delegateId}" method="delete" summary="Deletes a message delegation." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="messageId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="delegateId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/{messageIds}" method="delete" summary="Deletes multiple messages." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="messageIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/delete/byIds" method="post" summary="Deletes multiple messages." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message" method="get" summary="Get all messages (paginated) for current HC Party." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="startKey" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byFromAddress" method="get" summary="Get all messages (paginated) for current HC Party and provided from address." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="fromAddress" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcpId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byHcPartySecretForeignKeys" method="get" summary="List messages found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byToAddress" method="get" summary="Get all messages (paginated) for current HC Party and provided to address." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="toAddress" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="reverse" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcpId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byTransportGuid" method="get" summary="Get all messages (paginated) for current HC Party and provided transportGuid." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="transportGuid" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="received" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcpId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byTransportGuidSentDate" method="get" summary="Get all messages starting by a prefix between two date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="from" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="to" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="transportGuid" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcpId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/{messageId}/children" method="get" summary="Get children messages of provided message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="messageId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/children/batch" method="post" summary="Get children messages of provided message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/{messageId}" method="get" summary="Gets a message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="messageId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byInvoiceId" method="post" summary="Get children messages of provided message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/byTransportGuid/list" method="post" summary="Get all messages for current HC Party and provided transportGuids." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcpId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message" method="put" summary="Updates a message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Message" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/{messageId}/delegate" method="put" summary="Adds a delegation to a message." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="messageId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/readstatus" method="put" summary="Set read status for given list of messages." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="MessagesReadStatusUpdate" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/message/status/{status}" method="put" summary="Set status bits for given list of messages." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="status" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
