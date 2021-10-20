# SubContact

This entity represents a sub-contact. It is serialized in JSON and saved in the underlying icure-contact CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id ` | [String](String) | The Id of the sub-contact. We encourage using either a v4 UUID or a HL7 Id.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `descr ` | [String](String) | Description of the sub-contact  |
| `protocol ` | [String](String) | Protocol based on which the sub-contact was used for linking services to structuring elements  |
| `status ` | [Integer](Integer) |  format: int32. |
| `formId ` | [String](String) | Id of the form used in the sub-contact. Several sub-contacts with the same form ID can coexist as long as they are in different contacts or they relate to a different planOfActionID  |
| `planOfActionId ` | [String](String) | Id of the plan of action (healthcare approach) that is linked by the sub-contact to a service.  |
| `healthElementId ` | [String](String) | Id of the healthcare element that is linked by the sub-contact to a service  |
| `classificationId ` | [String](String) |   |
| `services * ` | [List](ServiceLink) | List of all services provided to the patient under a given contact which is linked by this sub-contact to other structuring elements.  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
