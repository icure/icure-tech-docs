# Create new User

A database is linked to [icure-data-model](../../icure-data-stack/icure-data-model/ "mention") concept [user.md](../../icure-data-stack/rest-api-calls/user.md "mention"), which is a root level Object. By definition a User has

### Private Encryption Key

<mark style="background-color:purple;">**This key is unique, iCure does not have it, and you cannot generate it again. You should never lose it, otherwise your data will become unreadable. **</mark>

<mark style="background-color:purple;">****</mark>![](<../../.gitbook/assets/image (36).png>)<mark style="background-color:purple;">****</mark>

All data stored in the database are protected by default with [end-to-end-encryption.md](../../icure-data-stack/end-to-end-encryption.md "mention"). To achieve this, the first time a new user is being created a private and public set of keys will be created. The public key will be stored in the iCure backend and the private key will be offered for download to your computer.&#x20;

### User Credentials

Username is the verified mail, that was used to [receive-an-invitation.md](receive-an-invitation.md "mention") and proceed to user creation. The password is uniquely connected and there is no recovery process. In case there is a problem, please connect with info at icure dot io.

![](<../../.gitbook/assets/image (33).png>)

Having the access credentials does not enable anybody to read the data available in the database, although it allows creation and deletion of a [user.md](../../icure-data-stack/rest-api-calls/user.md "mention") or [healthcareparty.md](../../icure-data-stack/rest-api-calls/healthcareparty.md "mention") and their respective databases. &#x20;

Username is by default the verified mail, that was used to [receive-an-invitation.md](receive-an-invitation.md "mention") and proceed to user creation. The password is uniquely connected and there is no recovery process. In case there is a problem, please connect with info at icure dot io.



###
