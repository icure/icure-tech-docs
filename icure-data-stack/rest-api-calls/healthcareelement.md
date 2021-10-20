# HealthcareElement

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement" method="post" summary="Create a healthcare element with the current user." %}
{% swagger-description %}
Returns an instance of created healthcare element.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="HealthElement" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/{healthElementIds}" method="delete" summary="Delete healthcare elements.." %}
{% swagger-description %}
Response is a set containing the ID's of deleted healthcare elements.
{% endswagger-description %}

{% swagger-parameter in="path" name="healthElementIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/filter" method="post" summary="Filter healthcare elements for the current user (HcParty)." %}
{% swagger-description %}
Returns a list of healthcare elements along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="FilterChainHealthElement" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/byHcPartySecretForeignKeys" method="get" summary="List healthcare elements found By Healthcare Party and secret foreign keyelementIds.." %}
{% swagger-description %}
Keys hast to delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/byHcPartySecretForeignKeys/delegations" method="get" summary="List helement stubs found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/{healthElementId}" method="get" summary="Get a healthcare element." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="healthElementId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement" method="put" summary="Modify a healthcare element." %}
{% swagger-description %}
Returns the modified healthcare element.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="HealthElement" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/batch" method="put" summary="Modify a batch of healthcare elements." %}
{% swagger-description %}
Returns the modified healthcare elements.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/{healthElementId}/delegate" method="post" summary="Delegates a healthcare element to a healthcare party." %}
{% swagger-description %}
It delegates a healthcare element to a healthcare party (By current healthcare party). Returns the element with new delegations.
{% endswagger-description %}

{% swagger-parameter in="path" name="healthElementId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/helement/delegations" method="post" summary="Update delegations in healthElements.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}
