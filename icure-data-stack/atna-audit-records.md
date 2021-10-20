# ATNA Audit Records

iCure Database creates an auditable granular archive, through the implementation of the [IHE ATNA (Audit Trail and Node Authentication) Profile](https://wiki.ihe.net/index.php/Audit\_Trail\_and\_Node\_Authentication). A repository of interactions with the database is maintained for auditing purposes, ensuring compliance with privacy regulations.

Auditable records are an integral part of all Regulations on Data Governance and Clinical practice, thus iCure Platform can be by design compliant with complex requirements of applicable laws and custom policies. ATNA records can be parsed externally, to ensure availability to third party auditors.&#x20;

The IHE ATNA is the basis of the Audit Trail Profiles designated by the[ eHealth DSI (Digital Service Infrastructure) ](https://ec.europa.eu/cefdigital/wiki/display/EHOPERATIONS/eHealth+DSI+Operations+Home)of the EU. This results in retroactive compliance to future compliance requirements with the Patient Summary and ePrescription in the EU and applications following these specifications. \


{% file src="../.gitbook/assets/eHDSI_Audit_Trail_Profiles_v2.2.0.pdf" %}
eHDSI Audit Trail Profiles v2.2
{% endfile %}

### Web Search

The information contained in the ATNA records refers to encrypted data. That is the reason that it can be externally accessible through a web platform, without the necessity for user authorization with encryption keys. That means that the data shown here are actual client data, that cannot be read by anyone else other than the owner of the data.&#x20;

![ATNA Web Search](<../.gitbook/assets/ATNA Audit Web (1).png>)

![Search for specific patient with encrypted data](<../.gitbook/assets/image (6).png>)

### SSID Export

A unique action with SSID can be exported in both JSON and XML

{% tabs %}
{% tab title="JSON" %}
```javascript
{
 "eventIdentification": {
  "eventID": {
   "code": "110107",
   "originalText": "Import",
   "codeSystemName": "DCM",
   "displayName": null
  },
  "eventDateTime": "2021-06-25T14:53:14.527932Z",
  "eventOutcomeIndicator": "SeriousFailure",
  "eventOutcomeDescription": "Association specifies an original document entry, but it was not provided",
  "eventActionCode": "Update",
  "purposesOfUse": [],
  "eventTypeCode": [
   {
    "code": "ITI-57",
    "originalText": "Update Document Set",
    "codeSystemName": "IHE Transactions",
    "displayName": null
   }
  ]
 },
 "activeParticipants": [
  {
   "userIsRequestor": true,
   "userID": "http://www.w3.org/2005/08/addressing/anonymous",
   "alternativeUserID": "UNKNOWN",
   "userName": null,
   "networkAccessPointID": "127.0.0.1",
   "networkAccessPointTypeCode": "IPAddress",
   "roleIDCodes": [
    {
     "code": "110153",
     "originalText": "Source Role ID",
     "codeSystemName": "DCM",
     "displayName": null
    }
   ],
   "mediaIdentifier": null,
   "mediaType": null
  },
  {
   "userIsRequestor": false,
   "userID": "http://host.docker.internal:8080/services/iti57Service",
   "alternativeUserID": "31052",
   "userName": null,
   "networkAccessPointID": "host.docker.internal",
   "networkAccessPointTypeCode": "MachineName",
   "roleIDCodes": [
    {
     "code": "110152",
     "originalText": "Destination Role ID",
     "codeSystemName": "DCM",
     "displayName": null
    }
   ],
   "mediaIdentifier": null,
   "mediaType": null
  }
 ],
 "auditSourceIdentification": {
  "auditSourceID": "iCureIHExds",
  "auditEnterpriseSiteID": "Taktik",
  "auditSourceType": [
   "Other"
  ]
 },
 "participantObjectIdentifications": [
  {
   "participantObjectID": "P0625084359.15^^^&1.3.6.1.4.1.21367.13.20.1000&ISO",
   "participantObjectIDTypeCode": {
    "code": "2",
    "originalText": "Patient Number",
    "codeSystemName": "RFC-3881",
    "displayName": null
   },
   "participantObjectName": null,
   "participantObjectQuery": null,
   "participantObjectTypeCode": "Person",
   "participantObjectTypeCodeRole": "Patient",
   "participantObjectDataLifeCycle": null,
   "participantObjectSensitivity": null,
   "participantObjectDetails": [],
   "participantObjectDescriptions": []
  },
  {
   "participantObjectID": "1.2.42.20210625084417.348",
   "participantObjectIDTypeCode": {
    "code": "urn:uuid:a54d6aa5-d40d-43f9-88c5-b4633d873bdd",
    "originalText": "submission set classificationNode",
    "codeSystemName": "IHE XDS Metadata",
    "displayName": null
   },
   "participantObjectName": null,
   "participantObjectQuery": null,
   "participantObjectTypeCode": "System",
   "participantObjectTypeCodeRole": "Job",
   "participantObjectDataLifeCycle": null,
   "participantObjectSensitivity": null,
   "participantObjectDetails": [],
   "participantObjectDescriptions": []
  }
 ]
}
```
{% endtab %}

{% tab title="XML" %}
```markup
<?xml version="1.0" encoding="UTF-8"?>
<AuditMessage>
	<EventIdentification EventActionCode="U" EventDateTime="2021-06-25T14:53:14.527932Z" EventOutcomeIndicator="8">
		<EventID csd-code="110107" codeSystemName="DCM" originalText="Import" />
		<EventTypeCode csd-code="ITI-57" codeSystemName="IHE Transactions" originalText="Update Document Set" />
		<EventOutcomeDescription>Association specifies an original document entry, but it was not provided</EventOutcomeDescription>
	</EventIdentification>
	<ActiveParticipant UserID="http://www.w3.org/2005/08/addressing/anonymous" AlternativeUserID="UNKNOWN" UserIsRequestor="true" NetworkAccessPointID="127.0.0.1" NetworkAccessPointTypeCode="2">
		<RoleIDCode csd-code="110153" codeSystemName="DCM" originalText="Source Role ID" />
	</ActiveParticipant>
	<ActiveParticipant UserID="http://host.docker.internal:8080/services/iti57Service" AlternativeUserID="31052" UserIsRequestor="false" NetworkAccessPointID="host.docker.internal" NetworkAccessPointTypeCode="1">
		<RoleIDCode csd-code="110152" codeSystemName="DCM" originalText="Destination Role ID" />
	</ActiveParticipant>
	<AuditSourceIdentification AuditEnterpriseSiteID="Taktik" AuditSourceID="iCureIHExds">
		<AuditSourceTypeCode csd-code="9" codeSystemName="DCM" originalText="Other" />
	</AuditSourceIdentification>
	<ParticipantObjectIdentification ParticipantObjectID="P0625084359.15^^^&amp;1.3.6.1.4.1.21367.13.20.1000&amp;ISO" ParticipantObjectTypeCode="1" ParticipantObjectTypeCodeRole="1">
		<ParticipantObjectIDTypeCode csd-code="2" codeSystemName="RFC-3881" originalText="Patient Number" />
	</ParticipantObjectIdentification>
	<ParticipantObjectIdentification ParticipantObjectID="1.2.42.20210625084417.348" ParticipantObjectTypeCode="2" ParticipantObjectTypeCodeRole="20">
		<ParticipantObjectIDTypeCode csd-code="urn:uuid:a54d6aa5-d40d-43f9-88c5-b4633d873bdd" codeSystemName="IHE XDS Metadata" originalText="submission set classificationNode" />
	</ParticipantObjectIdentification>
</AuditMessage>

```
{% endtab %}
{% endtabs %}



