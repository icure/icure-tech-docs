# User

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/current/hcparty/{healthcarePartyId}" method="put" summary="Assign a healthcare party ID to current user." %}
{% swagger-description %}
UserDto gets returned.
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/checkPassword" method="get" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="password" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user" method="post" summary="Create a user." %}
{% swagger-description %}
Create a user. HealthcareParty ID should be set. Email or Login have to be set. If login hasn't been set, Email will be used for Login instead.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="User" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/inGroup/{groupId}" method="post" summary="Create a user." %}
{% swagger-description %}
Create a user. HealthcareParty ID should be set. Email has to be set and the Login has to be null. On server-side, Email will be used for Login.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="User" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/{userId}" method="delete" summary="Delete a User based on his/her ID.." %}
{% swagger-description %}
Delete a User based on his/her ID. The return value is an array containing the ID of deleted user.
{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/inGroup/{groupId}/{userId}" method="delete" summary="Delete a User based on his/her ID.." %}
{% swagger-description %}
Delete a User based on his/her ID. The return value is an array containing the ID of deleted user.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/encodePassword" method="get" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="password" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/byHealthcarePartyId/{id}" method="get" summary="Get the list of users by healthcare party id." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/forgottenPassword/{email}" method="post" summary="Send a forgotten email message to an user." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="email" type="String" %}
the email of the user
{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="EmailTemplate" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/session" method="get" summary="Get Currently logged-in user session.." %}
{% swagger-description %}
Get current user.
{% endswagger-description %}

{% swagger-parameter in="path" name="" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/current" method="get" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/matches" method="get" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/{userId}" method="get" summary="Get a user by his ID." %}
{% swagger-description %}
General information about the user
{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/byEmail/{email}" method="get" summary="Get a user by his Email/Login." %}
{% swagger-description %}
General information about the user
{% endswagger-description %}

{% swagger-parameter in="path" name="email" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user" method="get" summary="List users with(out) pagination." %}
{% swagger-description %}
Returns a list of users.
{% endswagger-description %}

{% swagger-parameter in="query" name="startKey" type="String" %}
An user email
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
An user document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/inGroup/{groupId}" method="get" summary="List users with(out) pagination." %}
{% swagger-description %}
Returns a list of users.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
An user login
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
An user document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/{userId}/properties" method="put" summary="Modify a User property." %}
{% swagger-description %}
Modify a User properties based on his/her ID. The return value is the modified user.
{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user" method="put" summary="Modify a user.." %}
{% swagger-description %}
No particular return value. It's just a message.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="User" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/user/inGroup/{groupId}" method="put" summary="Modify a user.." %}
{% swagger-description %}
No particular return value. It's just a message.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="User" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
