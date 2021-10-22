# Receipt

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt" method="post" summary="Creates a receipt" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="Receipt" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt/delete/batch" method="post" summary="Deletes receipts" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="ListOfIds" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt/{receiptId}" method="get" summary="Gets a receipt" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="receiptId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt/{receiptId}/attachment/{attachmentId}" method="get" summary="Get an attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="receiptId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="attachmentId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt/byRef/{ref}" method="get" summary="Gets a receipt" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="ref" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt" method="put" summary="Updates a receipt" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="body" type="Receipt" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/receipt/{receiptId}/attachment/{blobType}" method="put" summary="Creates a receipt's attachment" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="receiptId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="blobType" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="enckeys" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="body" type="Object" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}
