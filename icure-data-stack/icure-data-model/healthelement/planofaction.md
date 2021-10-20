# PlanOfAction

List of healthcare approaches.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) |   |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `prescriberId ` | [String](String) | The id of the hcp who prescribed this healthcare approach  |
| `valueDate ` | [Long](Long) | The date (unix epoch in ms) when the healthcare approach is noted to have started and also closes on the same date format: int64. |
| `openingDate ` | [Long](Long) | The date (unix epoch in ms) of the start of the healthcare approach. format: int64. |
| `closingDate ` | [Long](Long) | The date (unix epoch in ms) marking the end of the healthcare approach. format: int64. |
| `deadlineDate ` | [Long](Long) | The date (unix epoch in ms) when the healthcare approach has to be carried out. format: int64. |
| `name ` | [String](String) | The name of the healthcare approach.  |
| `descr ` | [String](String) | Description of the healthcare approach.  |
| `note ` | [String](String) | Note about the healthcare approach.  |
| `idOpeningContact ` | [String](String) | Id of the opening contact when the healthcare approach was created.  |
| `idClosingContact ` | [String](String) | Id of the closing contact for the healthcare approach.  |
| `status * ` | [Integer](Integer) | bit 0: active/inactive, bit 1: relevant/irrelevant, bit 2 : present/absent, ex: 0 = active,relevant and present format: int32. |
| `careTeamMemberships * ` | [List](CareTeamMembership) | Members of the careteam involved in this approach  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
