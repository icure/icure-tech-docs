# Address

This entity represents an Address


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `addressType ` | [String](String) | The type of place the address represents, ex: home, office, hospital, clinic, etc.  Values: home, work, vacation, hospital, clinic, hq, other, temporary, postal, diplomatic, reference |
| `descr ` | [String](String) | Descriptive notes about the address  |
| `street ` | [String](String) | Street name  |
| `houseNumber ` | [String](String) | Building / house number  |
| `postboxNumber ` | [String](String) | Post / PO box number  |
| `postalCode ` | [String](String) | Postal/PIN/ZIP/Area code  |
| `city ` | [String](String) | Name of city in the address  |
| `state ` | [String](String) | Name of state in the Address  |
| `country ` | [String](String) | Name / code of country in the address  |
| `note ` | [String](String) | Additional notes  |
| `telecoms * ` | [List](Telecom) | List of other contact details available through telecom services, ex: email, phone number, fax, etc.  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
