# Form

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form" method="post" summary="Create a form with the current user" %}
{% swagger-description %}
Returns an instance of created form.
{% endswagger-description %}

{% swagger-parameter name="body" type="Form" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template" method="post" summary="Create a form template with the current user" %}
{% swagger-description %}
Returns an instance of created form template.
{% endswagger-description %}

{% swagger-parameter name="body" type="FormTemplate" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/batch" method="post" summary="Create a batch of forms" %}
{% swagger-description %}
Returns the created forms.
{% endswagger-description %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/{formTemplateId}" method="delete" summary="Delete a form template" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="formTemplateId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/delete/batch" method="post" summary="Delete forms." %}
{% swagger-description %}
Response is a set containing the ID's of deleted forms.
{% endswagger-description %}

{% swagger-parameter name="body" type="ListOfIds" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/childrenOf/{formId}/{hcPartyId}" method="get" summary="Get a list of forms by parents ids" %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="formId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="hcPartyId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/{formId}" method="get" summary="Gets a form" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="formId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/logicalUuid/{logicalUuid}" method="get" summary="Gets the most recent form with the given logicalUuid" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="logicalUuid" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/uniqueId/{uniqueId}" method="get" summary="Gets the most recent form with the given uniqueId" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="uniqueId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/{formTemplateId}" method="get" summary="Gets a form template by guid" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="formTemplateId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template" method="get" summary="Gets all form templates for current user" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="loadLayout" type="Boolean" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/{specialityCode}/guid/{formTemplateGuid}" method="get" summary="Gets a form template" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="formTemplateGuid" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="specialityCode" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/byIds" method="post" summary="Get a list of forms by ids" %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="body" type="ListOfIds" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/all/logicalUuid/{logicalUuid}" method="get" summary="Gets all forms with given logicalUuid" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="logicalUuid" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/all/uniqueId/{uniqueId}" method="get" summary="Gets all forms by uniqueId" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="uniqueId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/bySpecialty/{specialityCode}" method="get" summary="Gets all form templates" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="specialityCode" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="loadLayout" type="Boolean" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/byHcPartySecretForeignKeys" method="get" summary="List forms found By Healthcare Party and secret foreign keys." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="hcPartyId" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="secretFKeys" type="String" required="true" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="healthElementId" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="planOfActionId" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-parameter name="formTemplateId" type="String" required="false" in="query" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/byHcPartySecretForeignKeys/delegations" method="get" summary="List form stubs found By Healthcare Party and secret foreign keys." %}
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form" method="put" summary="Modify a form" %}
{% swagger-description %}
Returns the modified form.
{% endswagger-description %}

{% swagger-parameter name="body" type="Form" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/batch" method="put" summary="Modify a batch of forms" %}
{% swagger-description %}
Returns the modified forms.
{% endswagger-description %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/delegate/{formId}" method="post" summary="Delegates a form to a healthcare party" %}
{% swagger-description %}
It delegates a form to a healthcare party. Returns the form with the new delegations.
{% endswagger-description %}

{% swagger-parameter name="formId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/delegations" method="post" summary="Update delegations in form." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter name="body" type="List" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/{formTemplateId}/attachment/multipart" method="put" summary="Update a form template's layout" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter name="formTemplateId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="attachment" type="Byte[]" required="false" in="form" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v2/form/template/{formTemplateId}" method="put" summary="Modify a form template with the current user" %}
{% swagger-description %}
Returns an instance of created form template.
{% endswagger-description %}

{% swagger-parameter name="formTemplateId" type="String" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="body" type="FormTemplate" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}

{% endswagger-response %}
{% endswagger %}
