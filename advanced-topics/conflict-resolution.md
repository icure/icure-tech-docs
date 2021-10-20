# Multi-Master database replication

iCure Database is built on Apache CouchDB a web enabled database optimized for use over a network with multiple users, oriented at massively distributed systems with heavy usage that handle "Big Data".

### iCure Online/Offline update mode

CouchDB does not store data in a table along with relationships, but uses a B-Tree instead.  Each database in every user device is a collection of independent documents that maintain their own data and self-contained schemas. Document metadata contains revision information, so that differences happening while databases were disconnected, may be merged. CouchDB impelements its own version of a Multiversion Concurency Controll system, that supports [Master-Master replication](https://docs.couchdb.org/en/stable/replication/intro.html#master-master-replication).&#x20;

This enables the iCure to implement a fully [Hybrid Cloud Storage](../icure-data-stack/hybrid-cloud-storage.md). Files are not locked during update and they can be updated both online and offline, allowing the iCure to implement a conflict resolution method.&#x20;

![Locking vs "No-Locking" database files during transactions. Source: CouchDb.org](<../.gitbook/assets/image (30).png>)

### Data Synchronization in iCure&#x20;

Under normal conditions database synchronization between connected databases take place in **less that 300ms. **

### Data integrity

Other features include document-level [ACID](https://en.wikipedia.org/wiki/ACID) semantics with [eventual consistency](https://en.wikipedia.org/wiki/Eventual\_consistency), (incremental) MapReduce, and (incremental) replication. \


![CouchDB vs the CAP Theorem. Source: CouchDb.org](<../.gitbook/assets/image (31).png>)

CAP Theorem dictates that Databases can be optimized for two of the three most requested qualities: Consistency, Availability and Partition Tolerance. While CouchDB has been optimized for Partition Tolerance and Availability, it has the ability to provide local consistency at local databases and through incremental replication eventual consistency in the iCure database.&#x20;

![Incremental Replication leads to consistency between Db Nodes Source: CouchDb.org](<../.gitbook/assets/image (32).png>)

The [iCure Data Model](../icure-data-stack/icure-data-model/) has been designed so that it is agnostic to higher level Medical Data conceptual Data Models such as Open EHR and FHIR.  It does however make some basic assumptions over the nature of the data, that are to be utilized for. That is in line with the selection of CouchDb. In a healthcare setup one might expect that there are several encryption perimeters and distributed systems, that are to some extend experiencing aberrant disconnections.
