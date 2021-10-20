# Tarification


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) |   |
| `rev ` | [String](String) |   |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `label ` | [Map](String) |   |
| `context ` | [String](String) |   |
| `type ` | [String](String) |   |
| `code ` | [String](String) |   |
| `version ` | [String](String) |   |
| `author ` | [String](String) |   |
| `regions * ` | [List](String) |   |
| `periodicity * ` | [List](Periodicity) |   |
| `level ` | [Integer](Integer) |  format: int32. |
| `links * ` | [List](String) |   |
| `qualifiedLinks * ` | [Map](List) |   |
| `flags * ` | [List](String) |  Values:  |
| `searchTerms * ` | [Map](List) |   |
| `data ` | [String](String) |   |
| `appendices * ` | [Map](String) |   |
| `disabled * ` | [Boolean](Boolean) |   |
| `valorisations * ` | [List](Valorisation) |   |
| `category * ` | [Map](String) |   |
| `consultationCode ` | [Boolean](Boolean) |   |
| `hasRelatedCode ` | [Boolean](Boolean) |   |
| `needsPrescriber ` | [Boolean](Boolean) |   |
| `relatedCodes * ` | [List](String) |   |
| `ngroup ` | [String](String) |   |
| `letterValues * ` | [List](LetterValue) |   |
