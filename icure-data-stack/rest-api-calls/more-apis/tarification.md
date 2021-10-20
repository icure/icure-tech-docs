# Tarification

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification" method="post" summary="Create a Tarification." %}
{% swagger-description %}
Type, Tarification and Version are required.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Tarification" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification" method="get" summary="Finding tarifications by tarification, type and version with pagination.." %}
{% swagger-description %}
Returns a list of tarifications matched with given input.
{% endswagger-description %}

{% swagger-parameter in="query" name="region" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="type" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="tarification" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="version" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A tarification document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification/byLabel" method="get" summary="Finding tarifications by tarification, type and version with pagination.." %}
{% swagger-description %}
Returns a list of tarifications matched with given input.
{% endswagger-description %}

{% swagger-parameter in="query" name="region" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="types" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="language" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="label" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A tarification document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification/byRegionTypeTarification" method="get" summary="Finding tarifications by tarification, type and version." %}
{% swagger-description %}
Returns a list of tarifications matched with given input.
{% endswagger-description %}

{% swagger-parameter in="query" name="region" type="String" %}
Tarification region
{% endswagger-parameter %}

{% swagger-parameter in="query" name="type" type="String" %}
Tarification type
{% endswagger-parameter %}

{% swagger-parameter in="query" name="tarification" type="String" %}
Tarification tarification
{% endswagger-parameter %}

{% swagger-parameter in="query" name="version" type="String" %}
Tarification version
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification/{tarificationId}" method="get" summary="Get a tarification." %}
{% swagger-description %}
Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
{% endswagger-description %}

{% swagger-parameter in="path" name="tarificationId" type="String" %}
Tarification id
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification/{type}/{tarification}/{version}" method="get" summary="Get a tarification." %}
{% swagger-description %}
Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
{% endswagger-description %}

{% swagger-parameter in="path" name="type" type="String" %}
Tarification type
{% endswagger-parameter %}

{% swagger-parameter in="path" name="tarification" type="String" %}
Tarification tarification
{% endswagger-parameter %}

{% swagger-parameter in="path" name="version" type="String" %}
Tarification version
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification/byIds" method="post" summary="Get a list of tarifications by ids." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/tarification" method="put" summary="Modify a tarification." %}
{% swagger-description %}
Modification of (type, tarification, version) is not allowed.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Tarification" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
