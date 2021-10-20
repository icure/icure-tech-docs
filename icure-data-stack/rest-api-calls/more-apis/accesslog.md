# AccessLog

{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/accesslog" %}
{% api-method-summary %}
Creates an access log
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="AccessLog" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/accesslog/delete/batch" %}
{% api-method-summary %}
Deletes an access log
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="ListOfIds" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/accesslog" %}
{% api-method-summary %}
Get Paginated List of Access logs
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="fromEpoch" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="toEpoch" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="descending" type="Boolean" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/accesslog/byUser" %}
{% api-method-summary %}
Get Paginated List of Access logs by user after date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}
A User ID
{% endapi-method-parameter %}
{% api-method-parameter name="accessType" type="String" required=false %}
The type of access (COMPUTER or USER)
{% endapi-method-parameter %}
{% api-method-parameter name="startDate" type="Long" required=false %}
The start search epoch
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
The start key for pagination
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="descending" type="Boolean" required=false %}
Descending order
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/accesslog/{accessLogId}" %}
{% api-method-summary %}
Gets an access log
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="accessLogId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/accesslog/byHcPartySecretForeignKeys" %}
{% api-method-summary %}
List access logs found By Healthcare Party and secret foreign keyelementIds.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="secretFKeys" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/accesslog" %}
{% api-method-summary %}
Modifies an access log
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="AccessLog" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



