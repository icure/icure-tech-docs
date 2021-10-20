# Tarification

{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/tarification" %}
{% api-method-summary %}
Create a Tarification
{% endapi-method-summary %}

{% api-method-description %}
Type, Tarification and Version are required.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Tarification" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/tarification" %}
{% api-method-summary %}
Finding tarifications by tarification, type and version with pagination.
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of tarifications matched with given input.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="region" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="type" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="tarification" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="version" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A tarification document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/tarification/byRegionTypeTarification" %}
{% api-method-summary %}
Finding tarifications by tarification, type and version
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of tarifications matched with given input.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="region" type="String" required=false %}
Tarification region
{% endapi-method-parameter %}
{% api-method-parameter name="type" type="String" required=false %}
Tarification type
{% endapi-method-parameter %}
{% api-method-parameter name="tarification" type="String" required=false %}
Tarification tarification
{% endapi-method-parameter %}
{% api-method-parameter name="version" type="String" required=false %}
Tarification version
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/tarification/byLabel" %}
{% api-method-summary %}
Finding tarifications by tarification, type and version with pagination.
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of tarifications matched with given input.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="region" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="types" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="language" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="label" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A tarification document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/tarification/{tarificationId}" %}
{% api-method-summary %}
Get a tarification
{% endapi-method-summary %}

{% api-method-description %}
Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="tarificationId" type="String" required=true %}
Tarification id
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/tarification/{type}/{tarification}/{version}" %}
{% api-method-summary %}
Get a tarification
{% endapi-method-summary %}

{% api-method-description %}
Get a tarification based on ID or (tarification,type,version) as query strings. (tarification,type,version) is unique.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="type" type="String" required=true %}
Tarification type
{% endapi-method-parameter %}
{% api-method-parameter name="tarification" type="String" required=true %}
Tarification tarification
{% endapi-method-parameter %}
{% api-method-parameter name="version" type="String" required=true %}
Tarification version
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/tarification/byIds" %}
{% api-method-summary %}
Get a list of tarifications by ids
{% endapi-method-summary %}

{% api-method-description %}
Keys must be delimited by coma
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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/tarification" %}
{% api-method-summary %}
Modify a tarification
{% endapi-method-summary %}

{% api-method-description %}
Modification of (type, tarification, version) is not allowed.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Tarification" required=true %}

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



