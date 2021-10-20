# Group

This entity represents a group


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | The id of the group. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | The revision of the group in the database, used for conflict management / optimistic locking.  |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `name ` | [String](String) | Username for the group  |
| `password ` | [String](String) | Password for the group access  |
| `servers ` | [List](String) | List of servers accessible to the group  |
| `superAdmin * ` | [Boolean](Boolean) | Whether the group has a super admin permission, originally set to no access.  |
| `properties * ` | [List](PropertyStub) | Extra properties for the user. Those properties are typed (see class Property)  |
| `superGroup ` | [String](String) |   |
