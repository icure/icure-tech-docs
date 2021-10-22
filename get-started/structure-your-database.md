# Structure your Database

When you accept an invitation to create a database, a top level database is being created. The contents of it are encrypted with your own private key, that is only available to you.&#x20;

Your verified email is the username for the Database and at the same time is a [user](../icure-data-stack/icure-data-model/user/ "mention"), as defined in the [icure-data-model](../icure-data-stack/icure-data-model/ "mention"). As a user you may add data based on the Data Model Schema or create new Children-Databases assigned to new Users, as per the [icure-data-model](../icure-data-stack/icure-data-model/ "mention"). Those are encrypted with separate private keys, that are available to said users.

![](<../.gitbook/assets/image (40).png>)

As a parent User, you are able to see and manage other users in the database, as well as see the structure of their data. The data themselves are not directly available withouth the decryption private key.&#x20;

![](<../.gitbook/assets/image (37).png>)
