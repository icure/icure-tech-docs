# Document

This entity is a root level object. It represents a Document. It is serialized in JSON and saved in the underlying CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | The Id of the document. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | The revision of the document in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `objectStoreReference ` | [String](String) | Reference in object store  |
| `documentLocation ` | [String](String) | Location of the document Values: annex, body |
| `documentType ` | [String](String) | The type of document, ex: admission, clinical path, document report,invoice, etc. Values: admission, alert, bvt_sample, clinicalpath, clinicalsummary, contactreport, quote, invoice, death, discharge, dischargereport, ebirth_baby_medicalform, ebirth_baby_notification, ebirth_mother_medicalform, ebirth_mother_notification, ecare_safe_consultation, epidemiology, intervention, labrequest, labresult, medicaladvisoragreement, medicationschemeelement, note, notification, pharmaceuticalprescription, prescription, productdelivery, quickdischargereport, radiationexposuremonitoring, referral, report, request, result, sumehr, telemonitoring, template, template_admin, treatmentsuspension, vaccination |
| `documentStatus ` | [String](String) | The status of the development of the document. Ex: Draft, finalized, reviewed, signed, etc. Values: draft, finalized, pending_review, reviewed, pending_signature, signed, canceled, sent, delivered |
| `externalUri ` | [String](String) | When the document is stored in an external repository, this is the uri of the document in that repository  |
| `mainUti ` | [String](String) | The main Uniform Type Identifier of the document (https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html#//apple_ref/doc/uid/TP40001319-CH202-CHDHIJDE)  |
| `name ` | [String](String) | Name of the document  |
| `version ` | [String](String) | The document version  |
| `otherUtis * ` | [List](String) | Extra Uniform Type Identifiers  |
| `storedICureDocumentId ` | [String](String) | The ICureDocument (Form, Contact, ...) that has been used to generate the document  |
| `externalUuid ` | [String](String) | A unique external id (from another external source).  |
| `size ` | [Long](Long) | Size of the document file format: int64. |
| `hash ` | [String](String) | Hashed version of the document  |
| `openingContactId ` | [String](String) | Id of the contact during which the document was created  |
| `attachmentId ` | [String](String) | Id of attachment to this document  |
| `encryptedAttachment ` | [Byte[]](Byte[]) |  format: byte. |
| `decryptedAttachment ` | [Byte[]](Byte[]) |  format: byte. |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
