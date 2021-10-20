# Invoice

This entity is a root level object. It represents an Invoice. It is serialized in JSON and saved in the underlying iCure CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | The Id of the Invoice. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | The revision of the invoice in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `invoiceDate ` | [Long](Long) | The timestamp (unix epoch in ms) when the invoice was drafted, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `sentDate ` | [Long](Long) | The timestamp (unix epoch in ms) when the invoice was sent, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `printedDate ` | [Long](Long) | The timestamp (unix epoch in ms) when the invoice is printed, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `invoicingCodes * ` | [List](InvoicingCode) |   |
| `receipts * ` | [Map](String) |   |
| `recipientType ` | [String](String) | The type of user that receives the invoice, a patient or a healthcare party  |
| `recipientId ` | [String](String) | Id of the recipient of the invoice. For healthcare party and insurance, patient link happens through secretForeignKeys  |
| `invoiceReference ` | [String](String) |   |
| `thirdPartyReference ` | [String](String) |   |
| `thirdPartyPaymentJustification ` | [String](String) |   |
| `thirdPartyPaymentReason ` | [String](String) |   |
| `reason ` | [String](String) |   |
| `invoiceType ` | [String](String) | The format the invoice should follow based on the recipient which could be a patient, mutual fund or paying agency such as the CPAS Values: patient, mutualfund, payingagency, insurance, efact, other |
| `sentMediumType ` | [String](String) | Medium of the invoice: CD ROM, Email, paper, etc. Values: cdrom, eattest, efact, email, mediprima, paper |
| `interventionType ` | [String](String) |  Values: total, userfees |
| `groupId ` | [String](String) |   |
| `paymentType ` | [String](String) | Type of payment, ex: cash, wired, insurance, debit card, etc. Values: cash, wired, insurance, creditcard, debitcard, paypal, bitcoin, other |
| `paid ` | [Double](Double) |  format: double. |
| `payments ` | [List](Payment) |   |
| `gnotionNihii ` | [String](String) |   |
| `gnotionSsin ` | [String](String) |   |
| `gnotionLastName ` | [String](String) |   |
| `gnotionFirstName ` | [String](String) |   |
| `gnotionCdHcParty ` | [String](String) |   |
| `invoicePeriod ` | [Integer](Integer) |  format: int32. |
| `careProviderType ` | [String](String) |   |
| `internshipNihii ` | [String](String) |   |
| `internshipSsin ` | [String](String) |   |
| `internshipLastName ` | [String](String) |   |
| `internshipFirstName ` | [String](String) |   |
| `internshipCdHcParty ` | [String](String) |   |
| `internshipCbe ` | [String](String) |   |
| `supervisorNihii ` | [String](String) |   |
| `supervisorSsin ` | [String](String) |   |
| `supervisorLastName ` | [String](String) |   |
| `supervisorFirstName ` | [String](String) |   |
| `supervisorCdHcParty ` | [String](String) |   |
| `supervisorCbe ` | [String](String) |   |
| `error ` | [String](String) |   |
| `encounterLocationName ` | [String](String) |   |
| `encounterLocationNihii ` | [String](String) |   |
| `encounterLocationNorm ` | [Integer](Integer) |  format: int32. |
| `longDelayJustification ` | [Integer](Integer) |  format: int32. |
| `correctiveInvoiceId ` | [String](String) |   |
| `correctedInvoiceId ` | [String](String) |   |
| `creditNote ` | [Boolean](Boolean) |   |
| `creditNoteRelatedInvoiceId ` | [String](String) |   |
| `idDocument ` | [IdentityDocumentReader](IdentityDocumentReader) |   |
| `cancelReason ` | [String](String) |   |
| `cancelDate ` | [Long](Long) |  format: int64. |
| `options * ` | [Map](String) |   |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
