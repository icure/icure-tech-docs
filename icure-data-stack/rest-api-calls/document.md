# Document

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document" method="post" summary="Creates a document" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="Document" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/{documentId}/attachment" method="delete" summary="Deletes a document's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/delete/batch" method="post" summary="Deletes documents" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="ListOfIds" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/woDelegation" method="get" summary="List documents with no delegation" %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="limit" type="Integer" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/{documentId}" method="get" summary="Gets a document" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/{documentId}/attachment/{attachmentId}" method="get" summary="Load document's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="attachmentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="fileName" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/externaluuid/{externalUuid}" method="get" summary="Gets a document" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="externalUuid" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/byIds" method="post" summary="Gets a document" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="ListOfIds" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/externaluuid/{externalUuid}/all" method="get" summary="Get all documents with externalUuid" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="externalUuid" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/byTypeHcPartySecretForeignKeys" method="get" summary="List documents found By type, By Healthcare Party and secret foreign keys." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="documentTypeCode" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="hcPartyId" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="secretFKeys" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/byHcPartySecretForeignKeys" method="get" summary="List documents found By Healthcare Party and secret foreign keys." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="hcPartyId" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="secretFKeys" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document" method="put" summary="Updates a document" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="Document" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/batch" method="put" summary="Updates a batch of documents" %}
{% swagger-description %}
Returns the modified documents.
{% endswagger-description %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/{documentId}/attachment" method="put" summary="Creates a document's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="body" type="Object" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/{documentId}/attachment/multipart" method="put" summary="Creates a document's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="attachment" type="Byte[]" required="false" in="form" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/delegations" method="post" summary="Update delegations in healthElements." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/document/attachment" method="put" summary="Creates a document's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="documentId" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="body" type="Object" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}
