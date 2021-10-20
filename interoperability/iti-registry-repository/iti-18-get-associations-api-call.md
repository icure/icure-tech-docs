# ITI-18 get associations api call

### ITI-18: Registry Stored Query

ITI-18 includes a series of queries that can be performed to find back documents in iCure. The supported query types are:

* FindDocuments: Find all documents that match a set of criteria : the patient id, the creation date, ...
* FindSubmissionSets: Find a specific submission set by patient id, author or date along with submitted documents
* FindFolders: ITI-18 supports a hierarchical structure of folders that can be queried by patient, date, status or codes.
* Get... requests: allow you to retrieve metadata of Folders, SubmissionSets, Documents identified by their ids.&#x20;

:information\_source:[ITI TF-2a section 3.18](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2a.pdf#nameddest=3\_18\_Registry\_Stored\_Query\_\_ITI) for the detailed definition of the transaction.

[Iti-18 find documents api call example.](iti-18-get-associations-api-call.md)

### POST call

```http
POST /services/iti18Service HTTP/1.1
Host: xds.icure.dev
Content-Type: text/xml
Content-Length: 1215

<?xml version='1.0' encoding='UTF-8'?>
<soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope">
    <soapenv:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
        <wsa:To soapenv:mustUnderstand="true">http://host.docker.internal:8080/services/iti18Service</wsa:To>
        <wsa:MessageID soapenv:mustUnderstand="true">urn:uuid:794DCA5792EF38FB971624632082655</wsa:MessageID>
        <wsa:Action soapenv:mustUnderstand="true">urn:ihe:iti:2007:RegistryStoredQuery</wsa:Action>
    </soapenv:Header>
    <soapenv:Body>
        <query:AdhocQueryRequest xmlns:query="urn:oasis:names:tc:ebxml-regrep:xsd:query:3.0">
            <query:ResponseOption returnComposedObjects="true" returnType="LeafClass" />
            <tag0:AdhocQuery xmlns:tag0="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0" id="urn:uuid:a7ae438b-4bc2-4642-93e9-be891f7bb155">
                <tag0:Slot name="$uuid">
                    <tag0:ValueList>
                        <tag0:Value>('urn:uuid:48fb671b-2fc9-413b-8883-e80a0dcf8b2a')</tag0:Value>
                    </tag0:ValueList>
                </tag0:Slot>
            </tag0:AdhocQuery>
        </query:AdhocQueryRequest>
    </soapenv:Body>
</soapenv:Envelope>
```

Response

```markup
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
        <Action xmlns="http://www.w3.org/2005/08/addressing">urn:ihe:iti:2007:RegistryStoredQueryResponse</Action>
        <MessageID xmlns="http://www.w3.org/2005/08/addressing">urn:uuid:e1a0b162-8bd4-4433-b25e-767f04869299</MessageID>
        <To xmlns="http://www.w3.org/2005/08/addressing">http://www.w3.org/2005/08/addressing/anonymous</To>
        <RelatesTo xmlns="http://www.w3.org/2005/08/addressing">urn:uuid:794DCA5792EF38FB971624631914081</RelatesTo>
    </soap:Header>
    <soap:Body>
        <ns4:AdhocQueryResponse xmlns:ns6="urn:oasis:names:tc:ebxml-regrep:xsd:lcm:3.0" xmlns:ns5="urn:ihe:iti:xds-b:2007" xmlns:ns4="urn:oasis:names:tc:ebxml-regrep:xsd:query:3.0" xmlns:ns3="urn:oasis:names:tc:ebxml-regrep:xsd:rs:3.0" xmlns:ns2="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0" status="urn:oasis:names:tc:ebxml-regrep:ResponseStatusType:Success">
            <ns2:RegistryObjectList>
                <ns2:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember" sourceObject="ee3922d9-5239-4383-b308-f09f9b8c715c" targetObject="48fb671b-2fc9-413b-8883-e80a0dcf8b2a" id="urn:uuid:fdf07acf-9ce5-4935-8dd0-34bca7f645cf" />
                <ns2:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember" sourceObject="urn:uuid:1.2.42.20210625084417.319" targetObject="urn:uuid:fdf07acf-9ce5-4935-8dd0-34bca7f645cf" id="urn:uuid:7c323abe-89f6-44ca-ae3c-2ccb73b904fb" />
                <ns2:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember" sourceObject="1.2.42.20210625084417.319" targetObject="48fb671b-2fc9-413b-8883-e80a0dcf8b2a" id="urn:uuid:1fcf1450-918e-415a-8491-7a451177eb47" />
            </ns2:RegistryObjectList>
        </ns4:AdhocQueryResponse>
    </soap:Body>
</soap:Envelope>
```
