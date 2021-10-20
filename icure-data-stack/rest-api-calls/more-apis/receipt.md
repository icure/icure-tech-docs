# Receipt

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt" method="post" summary="Creates a receipt." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Receipt" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt/{receiptIds}" method="delete" summary="Deletes a receipt." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="receiptIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt/{receiptId}" method="get" summary="Gets a receipt." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="receiptId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt/{receiptId}/attachment/{attachmentId}" method="get" summary="Get an attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="receiptId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="attachmentId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="enckeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt/byref/{ref}" method="get" summary="Gets a receipt." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="ref" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt" method="put" summary="Updates a receipt." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Receipt" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/receipt/{receiptId}/attachment/{blobType}" method="put" summary="Creates a receipt's attachment." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="receiptId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="blobType" type="String" %}

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
