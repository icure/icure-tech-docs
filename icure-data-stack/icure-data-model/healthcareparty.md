# HealthcareParty

This entity is a root level object. It represents a healthcare party. It is serialized in JSON and saved in the underlying icure-healthcareParty CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | the Id of the healthcare party. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | the revision of the healthcare party in the database, used for conflict management / optimistic locking.  |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `name ` | [String](String) | The full name of the healthcare party, used mainly when the healthcare party is an organization  |
| `lastName ` | [String](String) | the lastname (surname) of the healthcare party. This is the official lastname that should be used for official administrative purposes.  |
| `firstName ` | [String](String) | the firstname (name) of the healthcare party.  |
| `gender ` | [String](String) | the gender of the healthcare party: male, female, indeterminate, changed, changedToMale, changedToFemale, unknown Values: male, female, indeterminate, changed, changedToMale, changedToFemale, unknown |
| `civility ` | [String](String) | Mr., Ms., Pr., Dr. ...  |
| `companyName ` | [String](String) | The name of the company this healthcare party is member of  |
| `speciality ` | [String](String) | Medical specialty of the healthcare party  |
| `bankAccount ` | [String](String) | Bank Account identifier of the healhtcare party, IBAN, deprecated, use financial institutions instead  |
| `bic ` | [String](String) | Bank Identifier Code, the SWIFT Address assigned to the bank, use financial institutions instead  |
| `proxyBankAccount ` | [String](String) |   |
| `proxyBic ` | [String](String) |   |
| `invoiceHeader ` | [String](String) | All details included in the invoice header  |
| `cbe ` | [String](String) | Identifier number for institution type if the healthcare party is an enterprise  |
| `ehp ` | [String](String) | Identifier number for the institution if the healthcare party is an organization  |
| `userId ` | [String](String) | The id of the user that usually handles this healthcare party.  |
| `parentId ` | [String](String) | Id of parent of the user representing the healthcare party.  |
| `convention ` | [Integer](Integer) |  format: int32. |
| `nihii ` | [String](String) | National Institute for Health and Invalidity Insurance number assigned to healthcare parties (institution or person).  |
| `nihiiSpecCode ` | [String](String) |   |
| `ssin ` | [String](String) | Social security inscription number.  |
| `addresses * ` | [List](Address) | The list of addresses (with address type).  |
| `languages * ` | [List](String) | The list of languages spoken by the patient ordered by fluency (alpha-2 code http://www.loc.gov/standards/iso639-2/ascii_8bits.html).  |
| `picture ` | [Byte[]](Byte[]) | A picture usually saved in JPEG format. format: byte. |
| `statuses * ` | [List](String) | The healthcare party's status: 'trainee' or 'withconvention' or 'accredited' Values:  |
| `statusHistory * ` | [List](HealthcarePartyHistoryStatus) | The healthcare party's status history  |
| `specialityCodes * ` | [List](CodeStub) | Medical specialty of the healthcare party codified using FHIR or Kmehr codificaiton scheme  |
| `sendFormats * ` | [Map](String) | The type of format for contacting the healthcare party, ex: mobile, phone, email, etc.  |
| `notes ` | [String](String) | Text notes.  |
| `financialInstitutionInformation * ` | [List](FinancialInstitutionInformation) | List of financial information (Bank, bank account).  |
| `billingType ` | [String](String) | The invoicing scheme this healthcare party adheres to : 'service fee' or 'flat rate'  |
| `type ` | [String](String) |   |
| `contactPerson ` | [String](String) |   |
| `contactPersonHcpId ` | [String](String) |   |
| `supervisorId ` | [String](String) |   |
| `flatRateTarifications * ` | [List](FlatRateTarification) |   |
| `importedData * ` | [Map](String) |   |
| `options * ` | [Map](String) |   |
| `hcPartyKeys * ` | [Map](List) | For each couple of HcParties (delegator and delegate), this map contains the exchange AES key. The delegator is always this hcp, the key of the map is the id of the delegate. The AES exchange key is encrypted using RSA twice : once using this hcp public key (index 0 in the Array) and once using the other hcp public key (index 1 in the Array). For a pair of HcParties. Each HcParty always has one AES exchange key for himself.  |
| `privateKeyShamirPartitions * ` | [Map](String) | The privateKeyShamirPartitions are used to share this hcp's private RSA key with a series of other hcParties using Shamir's algorithm. The key of the map is the hcp Id with whom this partition has been shared. The value is "threshold⎮partition in hex" encrypted using the the partition's holder's public RSA key  |
| `publicKey ` | [String](String) | The public key of this hcp  |
