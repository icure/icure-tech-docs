# AccessLog

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog" method="post" summary="Creates an access log." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="AccessLog" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog/{accessLogIds}" method="delete" summary="Deletes an access log." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="accessLogIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog/byHcPartySecretForeignKeys" method="get" summary="List access logs found By Healthcare Party and secret foreign keyelementIds.." %}
{% swagger-description %}

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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog/byUser" method="get" summary="Get Paginated List of Access logs." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="userId" type="String" %}
A User ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="accessType" type="String" %}
The type of access (COMPUTER or USER)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDate" type="Long" %}
The start search epoch
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="descending" type="Boolean" %}
Descending order
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog/{accessLogId}" method="get" summary="Gets an access log." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="accessLogId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog" method="get" summary="Lists access logs." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="fromEpoch" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="toEpoch" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="descending" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/accesslog" method="put" summary="Modifies an access log." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="AccessLog" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
