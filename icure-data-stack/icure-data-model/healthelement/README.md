# HealthElement

This entity is a root level object. It represents a healthcare element. It is serialized in JSON and saved in the underlying CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | The Id of the healthcare element. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | The revision of the patient in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `healthElementId ` | [String](String) | The logical id of the healthcare element, used to link together different versions of the same healthcare element. We encourage using either a v4 UUID or a HL7 Id.  |
| `valueDate ` | [Long](Long) | The date (unix epoch in ms) when the healthcare element is noted to have started and also closes on the same date format: int64. |
| `openingDate ` | [Long](Long) | The date (unix epoch in ms) of the start of the healthcare element. format: int64. |
| `closingDate ` | [Long](Long) | The date (unix epoch in ms) marking the end of the healthcare element. format: int64. |
| `descr ` | [String](String) | Description of the healthcare element.  |
| `note ` | [String](String) | A text note (can be confidential, encrypted by default).  |
| `relevant * ` | [Boolean](Boolean) | If the healthcare element is relevant or not (Set relevant by default).  |
| `idOpeningContact ` | [String](String) | Id of the opening contact when the healthcare element was created.  |
| `idClosingContact ` | [String](String) | Id of the closing contact for the healthcare element.  |
| `idService ` | [String](String) | Id of the service when a service is used to create a healthcare element.  |
| `status * ` | [Integer](Integer) | bit 0: active/inactive, bit 1: relevant/irrelevant, bit 2 : present/absent, ex: 0 = active,relevant and present format: int32. |
| `laterality ` | [String](String) | Left or Right dominance/preference. Values: left, right |
| `plansOfAction * ` | [List](PlanOfAction) | List of healthcare approaches.  |
| `episodes * ` | [List](Episode) | List of episodes of occurrences of the healthcare element.  |
| `careTeam * ` | [List](CareTeamMember) | List of care team members assigned for the healthcare element.  |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
