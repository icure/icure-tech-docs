# Patient

This entity is a root level object. It represents a patient It is serialized in JSON and saved in the underlying icure-patient CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | the Id of the patient. We encourage using either a v4 UUID or a HL7 Id.  |
| `identifier * ` | [List](Identifier) |   |
| `rev ` | [String](String) | the revision of the patient in the database, used for conflict management / optimistic locking.  |
| `created ` | [Long](Long) | The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `modified ` | [Long](Long) | The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server. format: int64. |
| `author ` | [String](String) | The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `responsible ` | [String](String) | The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.  |
| `tags * ` | [List](CodeStub) | A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.  |
| `codes * ` | [List](CodeStub) | A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes  |
| `endOfLife ` | [Long](Long) | Soft delete (unix epoch in ms) timestamp of the object. format: int64. |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `firstName ` | [String](String) | the firstname (name) of the patient.  |
| `lastName ` | [String](String) | the lastname (surname) of the patient. This is the official lastname that should be used for official administrative purposes.  |
| `companyName ` | [String](String) | the name of the company this patient is member of.  |
| `languages * ` | [List](String) | the list of languages spoken by the patient ordered by fluency (alpha-2 code http://www.loc.gov/standards/iso639-2/ascii_8bits.html).  |
| `addresses * ` | [List](Address) | the list of addresses (with address type).  |
| `civility ` | [String](String) | Mr., Ms., Pr., Dr. ...  |
| `gender ` | [String](String) | the gender of the patient: male, female, indeterminate, changed, changedToMale, changedToFemale, unknown Values: male, female, indeterminate, changed, changedToMale, changedToFemale, unknown |
| `birthSex ` | [String](String) | the birth sex of the patient: male, female, indeterminate, unknown Values: male, female, indeterminate, changed, changedToMale, changedToFemale, unknown |
| `mergeToPatientId ` | [String](String) | The id of the patient this patient has been merged with.  |
| `mergedIds * ` | [List](String) | The ids of the patients that have been merged inside this patient.  |
| `alias ` | [String](String) | An alias of the person, nickname, ...  |
| `active * ` | [Boolean](Boolean) | Is the patient active (boolean).  |
| `deactivationReason * ` | [String](String) | When not active, the reason for deactivation. Values: deceased, moved, other_doctor, retired, no_contact, unknown, none |
| `ssin ` | [String](String) | Social security inscription number.  |
| `maidenName ` | [String](String) | Lastname at birth (can be different of the current name), depending on the country, must be used to design the patient .  |
| `spouseName ` | [String](String) | Lastname of the spouse for a married woman, depending on the country, can be used to design the patient.  |
| `partnerName ` | [String](String) | Lastname of the partner, should not be used to design the patient.  |
| `personalStatus ` | [String](String) | any of `single`, `in_couple`, `married`, `separated`, `divorced`, `divorcing`, `widowed`, `widower`, `complicated`, `unknown`, `contract`, `other`. Values: single, in_couple, married, separated, divorced, divorcing, widowed, widower, complicated, unknown, contract, other |
| `dateOfBirth ` | [Integer](Integer) | The birthdate encoded as a fuzzy date on 8 positions (YYYYMMDD) MM and/or DD can be set to 00 if unknown (19740000 is a valid date). format: int32. |
| `dateOfDeath ` | [Integer](Integer) | The date of death encoded as a fuzzy date on 8 positions (YYYYMMDD) MM and/or DD can be set to 00 if unknown (19740000 is a valid date). format: int32. |
| `timestampOfLatestEidReading ` | [Long](Long) | Timestamp of the latest validation of the eID of the person.. format: int64. |
| `placeOfBirth ` | [String](String) | The place of birth.  |
| `placeOfDeath ` | [String](String) | The place of death.  |
| `deceased ` | [Boolean](Boolean) | Is the patient deceased.  |
| `education ` | [String](String) | The level of education (college degree, undergraduate, phd).  |
| `profession ` | [String](String) | The current professional activity.  |
| `note ` | [String](String) | A text note (can be confidential, encrypted by default).  |
| `administrativeNote ` | [String](String) | An administrative note, not confidential.  |
| `nationality ` | [String](String) | The nationality of the patient.  |
| `race ` | [String](String) | The race of the patient.  |
| `ethnicity ` | [String](String) | The ethnicity of the patient.  |
| `preferredUserId ` | [String](String) | The id of the user that usually handles this patient.  |
| `picture ` | [Byte[]](Byte[]) | A picture usually saved in JPEG format. format: byte. |
| `externalId ` | [String](String) | An external (from another source) id with no guarantee or requirement for unicity .  |
| `insurabilities * ` | [List](Insurability) | List of insurance coverages (of class Insurability, see below).  |
| `partnerships * ` | [List](Partnership) | List of partners, or persons of contact (of class Partnership, see below).  |
| `patientHealthCareParties * ` | [List](PatientHealthCareParty) | Links (usually for therapeutic reasons) between this patient and healthcare parties (of class PatientHealthcareParty).  |
| `financialInstitutionInformation * ` | [List](FinancialInstitutionInformation) | Financial information (Bank, bank account) used to reimburse the patient.  |
| `medicalHouseContracts * ` | [List](MedicalHouseContract) | Contracts between the patient and the healthcare entity.  |
| `patientProfessions * ` | [List](CodeStub) | Codified list of professions exercised by this patient.  |
| `parameters * ` | [Map](List) | Extra parameters  |
| `properties * ` | [List](PropertyStub) | Extra properties  |
| `hcPartyKeys * ` | [Map](List) | For each couple of HcParties (delegator and delegate), this map contains the exchange AES key. The delegator is always this hcp, the key of the map is the id of the delegate. The AES exchange key is encrypted using RSA twice : once using this hcp public key (index 0 in the Array) and once using the other hcp public key (index 1 in the Array). For a pair of HcParties. Each HcParty always has one AES exchange key for himself.  |
| `privateKeyShamirPartitions * ` | [Map](String) | The privateKeyShamirPartitions are used to share this hcp's private RSA key with a series of other hcParties using Shamir's algorithm. The key of the map is the hcp Id with whom this partition has been shared. The value is "threshold⎮partition in hex" encrypted using the the partition's holder's public RSA key  |
| `publicKey ` | [String](String) | The public key of this hcp  |
| `secretForeignKeys * ` | [List](String) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find all contacts for a specific patient. These keys are in clear. You can have several to partition the medical document space.  |
| `cryptedForeignKeys * ` | [Map](List) | The secretForeignKeys are filled at the to many end of a one to many relationship (for example inside Contact for the Patient -> Contacts relationship). Used when we want to find the patient for a specific contact. These keys are the encrypted id (using the hcParty key for the delegate) that can be found in clear inside the patient. ids encrypted using the hcParty keys.  |
| `delegations * ` | [Map](List) | When a document is created, the responsible generates a cryptographically random master key (never to be used for something else than referencing from other entities). He/she encrypts it using his own AES exchange key and stores it as a delegation. The responsible is thus always in the delegations as well  |
| `encryptionKeys * ` | [Map](List) | When a document needs to be encrypted, the responsible generates a cryptographically random master key (different from the delegation key, never to appear in clear anywhere in the db. He/she encrypts it using his own AES exchange key and stores it as a delegation  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
| `medicalLocationId ` | [String](String) | The id of the medical location where this entity was created.  |
