# Document

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document" method="post" summary="Creates a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Document" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentId}/attachment" method="delete" summary="Deletes a document's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentIds}" method="delete" summary="Deletes a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/byTypeHcPartySecretForeignKeys" method="get" summary="List documents found By type, By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="documentTypeCode" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/byHcPartySecretForeignKeys" method="get" summary="List documents found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/woDelegation" method="get" summary="List documents with no delegation." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentId}" method="get" summary="Gets a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentId}/attachment/{attachmentId}" method="get" summary="Load document's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="attachmentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="enckeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="fileName" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/externaluuid/{externalUuid}" method="get" summary="Gets a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="externalUuid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/batch" method="post" summary="Gets a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/externaluuid/{externalUuid}/all" method="get" summary="Get all documents with externalUuid." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="externalUuid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document" method="put" summary="Updates a document." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Document" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/batch" method="put" summary="Updates a batch of documents." %}
{% swagger-description %}
Returns the modified documents.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentId}/attachment" method="put" summary="Creates a document's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="enckeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/{documentId}/attachment/multipart" method="put" summary="Creates a document's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="enckeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/delegations" method="post" summary="Update delegations in healthElements.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/document/attachment" method="put" summary="Creates a document's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="documentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="enckeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
