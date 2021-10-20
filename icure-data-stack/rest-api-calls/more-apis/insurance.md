# Insurance

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance" method="post" summary="Creates an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Insurance" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance/{insuranceId}" method="delete" summary="Deletes an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="insuranceId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance/{insuranceId}" method="get" summary="Gets an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="insuranceId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance/byIds" method="post" summary="Gets insurances by id." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance/byCode/{insuranceCode}" method="get" summary="Gets an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="insuranceCode" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance/byName/{insuranceName}" method="get" summary="Gets an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="insuranceName" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/insurance" method="put" summary="Modifies an insurance." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Insurance" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
