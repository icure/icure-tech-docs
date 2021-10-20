# Hybrid Cloud Storage

The owner of iCure can select storage of data in commercial or private cloud and can determine parameters such as data residency or even the bare metal servers. At the same time, local instances of the necessary data are stored in users machines, to optimize offline synchrnization.

The database has been optimized for synchronous use from multiple users, online and offline. That means, that there is an extensive conflict resolution policy implemented, that can resolute conflicts in under 300 ms. The Database is an instance of Couch Database, a NoSQL Database optimized for data integrity. Conflict resolution between asynchronous edits is reduced down to 300ms and that enables the synchronous existence of online and local offline copies of the database, while data are protected by end-to-end encryption.\


You can start in initial installation of iCure on&#x20;

{% content-ref url="what-is-icure/install-icure.md" %}
[install-icure.md](what-is-icure/install-icure.md)
{% endcontent-ref %}

