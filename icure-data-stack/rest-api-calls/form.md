# Form

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form" method="post" summary="Create a form with the current user." %}
{% swagger-description %}
Returns an instance of created form.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Form" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template" method="post" summary="Create a form template with the current user." %}
{% swagger-description %}
Returns an instance of created form template.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="FormTemplate" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/{formTemplateId}" method="delete" summary="Delete a form template." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formTemplateId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/{formIds}" method="delete" summary="Delete forms.." %}
{% swagger-description %}
Response is a set containing the ID's of deleted forms.
{% endswagger-description %}

{% swagger-parameter in="path" name="formIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template" method="get" summary="Gets all form templates for current user." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="loadLayout" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/bySpecialty/{specialityCode}" method="get" summary="Gets all form templates." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="specialityCode" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="loadLayout" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/byHcPartySecretForeignKeys" method="get" summary="List forms found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="healthElementId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="planOfActionId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="formTemplateId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/byHcPartySecretForeignKeys/delegations" method="get" summary="List form stubs found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/childrenOf/{formId}/{hcPartyId}" method="get" summary="Get a list of forms by ids." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="path" name="formId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/{formId}" method="get" summary="Gets a form." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/formUuid/{formUuid}" method="get" summary="Gets a form." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formUuid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/lid/{lid}" method="get" summary="Gets a form." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="lid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/{formTemplateId}" method="get" summary="Gets a form template by guid." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formTemplateId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/{specialityCode}/guid/{formTemplateGuid}" method="get" summary="Gets a form template." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formTemplateGuid" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="specialityCode" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/byIds" method="post" summary="Get a list of forms by ids." %}
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/all/formUuid/{formUuid}" method="get" summary="Gets all forms by formUuid." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formUuid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/all/lid/{lid}" method="get" summary="Gets all forms by lid." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="lid" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form" method="put" summary="Modify a form." %}
{% swagger-description %}
Returns the modified form.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Form" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/batch" method="put" summary="Modify a batch of forms." %}
{% swagger-description %}
Returns the modified forms.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/delegate/{formId}" method="post" summary="Delegates a form to a healthcare party." %}
{% swagger-description %}
It delegates a form to a healthcare party. Returns the form with the new delegations.
{% endswagger-description %}

{% swagger-parameter in="path" name="formId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/delegations" method="post" summary="Update delegations in form.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/{formTemplateId}/attachment/multipart" method="put" summary="Update a form template's layout." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="formTemplateId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/form/template/{formTemplateId}" method="put" summary="Modify a form template with the current user." %}
{% swagger-description %}
Returns an instance of created form template.
{% endswagger-description %}

{% swagger-parameter in="path" name="formTemplateId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="FormTemplate" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
