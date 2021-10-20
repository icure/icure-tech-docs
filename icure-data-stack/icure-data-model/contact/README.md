# Contact

This entity is a root-level object. It represents a contact. It is serialized in JSON and saved in the underlying icure-contact CouchDB database.
The contact is the entity that records the medical information about the patient chronologically. A visit to the patient&#x27;s house, a consultation at the practice, a phone call between the patient and the healthcare party or integrating lab reports into the medical file are examples of when a contact can be recorded.
A contact can occur with or without direct interaction between the patient and the healthcare party. For example, when a healthcare party encodes data received from laboratory&#x27;s test result, this is done in the absence of a patient.
A contact groups together pieces of information collected during one single event, for one single patient and for one or more healthcare parties. Patient&#x27;s complaints, the diagnosis of a new problem, a surgical procedure, etc. are collected inside a contact.
The main sub-element of the contact is the service. Each atomic piece of information collected during a contact is a service and is stored inside the services list of a contact.



## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | the Id of the contact. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | the revision of the contact in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `groupId ` | [String](String) | Separate contacts can merged in one logical contact if they share the same groupId. When a contact must be split to selectively assign rights to healthcare parties, the split contacts all share the same groupId  |
| `openingDate ` | [Long](Long) | The date (YYYYMMDDhhmmss) of the start of the contact. format: int64. |
| `closingDate ` | [Long](Long) | The date (YYYYMMDDhhmmss) marking the end of the contact. format: int64. |
| `descr ` | [String](String) | Description of the contact  |
| `location ` | [String](String) | Location where the contact was recorded.  |
| `externalId ` | [String](String) | An external (from another source) id with no guarantee or requirement for unicity.  |
| `encounterType ` | [CodeStub](CodeStub) |   |
| `subContacts * ` | [List](SubContact) | Set of all sub-contacts recorded during the given contact. Sub-contacts are used to link services embedded inside this contact to healthcare elements, healthcare approaches and/or forms.  |
| `services * ` | [List](Service) | Set of all services provided to the patient during the contact.  |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
