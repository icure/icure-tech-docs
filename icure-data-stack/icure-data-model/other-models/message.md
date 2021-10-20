# Message

This entity is a root level object. It represents a Message. It is serialized in JSON and saved in the underlying CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | The ID of the message. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | The revision of the message in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `fromAddress ` | [String](String) | Address of the sender of the message  |
| `fromHealthcarePartyId ` | [String](String) | ID of the healthcare party sending the message  |
| `formId ` | [String](String) |   |
| `status ` | [Integer](Integer) | Status of the message format: int32. |
| `recipientsType ` | [String](String) | The type of user who is the recipient of this message  |
| `recipients * ` | [List](String) | List of IDs of healthcare parties to whom the message is addressed  |
| `toAddresses * ` | [List](String) | The address of the recipient of the message. Format is of an email address with extra domains defined for mycarenet and ehealth: (efact.mycarenet.be/eattest.mycarenet.be/chapter4.mycarenet.be/ehbox.ehealth.fgov.be)  |
| `received ` | [Long](Long) | The timestamp (unix epoch in ms) when the message was received format: int64. |
| `sent ` | [Long](Long) | The timestamp (unix epoch in ms) when the message was sent format: int64. |
| `metas * ` | [Map](String) |   |
| `readStatus * ` | [Map](MessageReadStatus) | Status showing whether the message is read or not and the time of reading  |
| `transportGuid ` | [String](String) |   |
| `remark ` | [String](String) |   |
| `conversationGuid ` | [String](String) |   |
| `subject ` | [String](String) | Subject for the message  |
| `invoiceIds * ` | [List](String) | Set of IDs for invoices in the message  |
| `parentId ` | [String](String) | ID of a parent in a message conversation  |
| `externalRef ` | [String](String) |   |
| `unassignedResults * ` | [List](String) |   |
| `assignedResults * ` | [Map](String) |   |
| `senderReferences * ` | [Map](String) |   |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
