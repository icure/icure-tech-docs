# Iti-42 register document set api call

### **ITI-42: **Register Document Set-b

ITI-42 is used to register a set of document-associated metadata.

Upon receipt of a Register Document Set-b Request message, the Document Registry:

1. Performs metadata validations&#x20;
2. Stores all IHE-defined metadata attributes&#x20;

:information\_source:[ITI TF-2b section 3.42](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2b.pdf#nameddest=3\_42\_Register\_Document\_Set\_b\_\_I) for the detailed definition of the transaction.

[Iti-42 register document set api call example](iti-42-register-document-set-api-call.md)

### POST Call

```http
POST /services/iti42Service HTTP/1.1
Host: xds.icure.dev
Content-Type: text/xml
Content-Length: 19101

<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing"
            xmlns:s="http://www.w3.org/2003/05/soap-envelope">
    <s:Header>
        <a:Action s:mustUnderstand="1">urn:ihe:iti:2007:ProvideAndRegisterDocumentSet-b</a:Action>
        <a:MessageID>urn:uuid:b4de5521-aad8-425b-adff-b54835344f50</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://xds.icure.dev/services/iti41Service</a:To>
        <a:hcPartyId>782f1bcd-9f3f-408a-af1b-cd9f3f908a98</a:hcPartyId>
    </s:Header>
    <s:Body>
        <lcm:SubmitObjectsRequest xmlns:lcm="urn:oasis:names:tc:ebxml-regrep:xsd:lcm:3.0"
                                  xmlns:rim="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0"
                                  xmlns:rs="urn:oasis:names:tc:ebxml-regrep:xsd:rs:3.0"
                                  xmlns:xdsb="urn:ihe:iti:xds-b:2007"
                                  xmlns:xop="http://www.w3.org/2004/08/xop/include">
            <rim:RegistryObjectList>
                <rim:RegistryPackage id="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                     objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:RegistryPackage">
                    <rim:Slot name="submissionTime">
                        <rim:ValueList>
                            <rim:Value>20201021074726</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Name>
                        <rim:LocalizedString value="XDS Submission Set"/>
                    </rim:Name>
                    <rim:Classification classificationScheme="urn:uuid:aa543740-bdda-424e-8c96-df4873be8500"
                                        classifiedObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                        nodeRepresentation="History and Physical"
                                        id="urn:uuid:8e8a49ee-0e41-4fd0-8d6c-6fdf9a4bbf0a"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon contentTypeCodes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationNode="urn:uuid:a54d6aa5-d40d-43f9-88c5-b4633d873bdd"
                                        classifiedObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                        id="urn:uuid:bdef1bc8-d7cf-406a-af88-65ac6ef6ca8f"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification"/>
                    <rim:ExternalIdentifier id="urn:uuid:44f3448e-1f84-479d-8492-59bf5bfe6a5a"
                                            identificationScheme="urn:uuid:554ac39e-e3fe-47fe-b233-965d2a147832"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                            value="1.3.6.1.4.1.21367.2012.2.1.1">
                        <rim:Name>
                            <rim:LocalizedString value="XDSSubmissionSet.sourceId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                    <rim:ExternalIdentifier id="urn:uuid:37f26506-80d9-417c-ab73-d1bc31ef3e8b"
                                            identificationScheme="urn:uuid:96fdda7c-d067-4183-912e-bf5ee74998a8"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                            value="1.3.6.1.4.1.12559.11.1.2.2.1.1.4.149229">
                        <rim:Name>
                            <rim:LocalizedString value="XDSSubmissionSet.uniqueId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                    <rim:ExternalIdentifier id="982ea0b2-a881-43ad-8529-58462c1c7f39"
                                            identificationScheme="urn:uuid:6b5aea1a-874d-4603-a4bc-96a0a7b38446"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                            value="6cef78cc-d450-4242-9943-88a0a53d77f2^^^&amp;1.3.6.1.4.1.21367.2005.3.7&amp;ISO">
                        <rim:Name>
                            <rim:LocalizedString value="XDSSubmissionSet.patientId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                </rim:RegistryPackage>
                <rim:RegistryPackage id="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                     objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:RegistryPackage"
                                     status="urn:oasis:names:tc:ebxml-regrep:StatusType:Approved">
                    <rim:Slot name="lastUpdateTime">
                        <rim:ValueList>
                            <rim:Value>20201021074726</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Name>
                        <rim:LocalizedString value="XDS Folder 1"/>
                    </rim:Name>
                    <rim:Classification classificationScheme="urn:uuid:1ba97051-7806-41a8-a48b-8fce7af683c5"
                                        classifiedObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                        nodeRepresentation="Folder"
                                        id="urn:uuid:5f66c2c9-1509-4052-80ad-8921d3961968"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationNode="urn:uuid:d9d542f3-6cc4-48b6-8870-ea235fbc94c2"
                                        classifiedObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                        id="urn:uuid:b576ee35-5b57-4dec-8b34-52fa7307d458"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification"/>
                    <rim:ExternalIdentifier id="urn:uuid:cfcf1704-5823-4e9f-a474-72bf10f78d29"
                                            identificationScheme="urn:uuid:75df8f67-9973-4fbe-a900-df66cefecc5a"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                            value="1.3.6.1.4.1.12559.11.1.2.2.1.1.3.149230">
                        <rim:Name>
                            <rim:LocalizedString value="XDSFolder.uniqueId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                    <rim:ExternalIdentifier id="539314eb-78e5-4372-ad07-f545752b801c"
                                            identificationScheme="urn:uuid:f64ffdf0-4b97-4e06-b79f-a52b38ec2f8a"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                            value="6cef78cc-d450-4242-9943-88a0a53d77f2^^^&amp;1.3.6.1.4.1.21367.2005.3.7&amp;ISO">
                        <rim:Name>
                            <rim:LocalizedString value="XDSFolder.patientId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                </rim:RegistryPackage>
                <rim:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember"
                                 id="3e221939-971e-48a1-bc9f-82992223fe30"
                                 sourceObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                 targetObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"/>
                <rim:ExtrinsicObject id="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                     mimeType="image/jpeg"
                                     objectType="urn:uuid:7edca82f-054d-47f2-a032-9b2a5b5186c1"
                                     status="urn:oasis:names:tc:ebxml-regrep:StatusType:Approved">
                    <rim:Slot name="hash">
                        <rim:ValueList>
                            <rim:Value>83239e367680adbc2113c00fb760fac18e5eba46</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Slot name="size">
                        <rim:ValueList>
                            <rim:Value>57703</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Slot name="languageCode">
                        <rim:ValueList>
                            <rim:Value>en-us</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Slot name="creationTime">
                        <rim:ValueList>
                            <rim:Value>20201021074522</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Slot name="repositoryUniqueId">
                        <rim:ValueList>
                            <rim:Value>1.3.6.1.4.0.0.1000</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Slot name="sourcePatientId">
                        <rim:ValueList>
                            <rim:Value>6cef78cc-d450-4242-9943-88a0a53d77f2^^^&amp;1.3.6.1.4.1.21367.2005.3.7&amp;ISO</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                    <rim:Name>
                        <rim:LocalizedString value="Test doc"/>
                    </rim:Name>
                    <rim:Classification classificationScheme="urn:uuid:41a5887f-8865-4c09-adf7-e362475b143a"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:aaec446c-0a92-4198-b324-1cbd81b3f944"
                                        nodeRepresentation="IMAGES"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationScheme="urn:uuid:f4f85eac-e6cb-4883-b524-f2705394840f"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:2aa6d34e-edb2-4f96-9ecc-cb1928664f20"
                                        nodeRepresentation="L"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationScheme="urn:uuid:a09d5840-386c-46f2-b5ad-9c3699a4309d"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:543f0fc0-fde4-4962-bfbe-07cbf4d2483d"
                                        nodeRepresentation="urn:ihe:iti:xds:2017:mimeTypeSufficient"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationScheme="urn:uuid:f33fb8ac-18af-42cc-ae0e-ed0b0bdb91e1"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:3df6a59c-dbf5-4549-8229-88cf9b31a05a"
                                        nodeRepresentation="394747008"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationScheme="urn:uuid:cccf5598-8b07-4b77-a05e-ae952c785ead"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:3d2c1cb5-e0bf-4dd4-b48b-88053e370d9b"
                                        nodeRepresentation="Practice-L"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:Classification classificationScheme="urn:uuid:f0306f51-975f-434e-a61c-c59651d33983"
                                        classifiedObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                        id="urn:uuid:7d64012f-56cc-4353-bca4-38020302275f"
                                        nodeRepresentation="E1762"
                                        objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Classification">
                        <rim:Slot name="codingScheme">
                            <rim:ValueList>
                                <rim:Value>Connect-a-thon codes</rim:Value>
                            </rim:ValueList>
                        </rim:Slot>
                        <rim:Name/>
                    </rim:Classification>
                    <rim:ExternalIdentifier id="urn:uuid:15be9a69-78cd-4fe0-9be7-35e7d81e6375"
                                            identificationScheme="urn:uuid:2e82c1f6-a085-4c72-9da3-8640a32e42ab"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                            value="1.3.6.1.4.1.12559.11.1.2.2.1.1.3.149231">
                        <rim:Name>
                            <rim:LocalizedString value="XDSDocumentEntry.uniqueId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                    <rim:ExternalIdentifier id="f5e7bcd6-e989-4f30-b3cb-08e7eaba4dd3"
                                            identificationScheme="urn:uuid:58a6f841-87b3-4a3e-92fd-a8ffeff98427"
                                            objectType="urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExternalIdentifier"
                                            registryObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"
                                            value="6cef78cc-d450-4242-9943-88a0a53d77f2^^^&amp;1.3.6.1.4.1.21367.2005.3.7&amp;ISO">
                        <rim:Name>
                            <rim:LocalizedString value="XDSDocumentEntry.patientId"/>
                        </rim:Name>
                    </rim:ExternalIdentifier>
                </rim:ExtrinsicObject>
                <rim:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember"
                                 id="d06f459a-c010-4326-b9cb-daa05c76df4e"
                                 sourceObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                 targetObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d">
                    <rim:Slot name="SubmissionSetStatus">
                        <rim:ValueList>
                            <rim:Value>Original</rim:Value>
                        </rim:ValueList>
                    </rim:Slot>
                </rim:Association>
                <rim:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember"
                                 id="7f97f2a2-f748-468d-84c1-846ed37bdfa0"
                                 sourceObject="urn:uuid:bce70ae8-9018-4ec6-8019-247630d35165"
                                 targetObject="urn:uuid:ee1f9abe-bc9a-483c-a353-58d7116ea43d"/>
                <rim:Association associationType="urn:oasis:names:tc:ebxml-regrep:AssociationType:HasMember"
                                 id="6112b1ab-721d-48ec-81f6-a13e5936fcb3"
                                 sourceObject="urn:uuid:79346ade-40a1-401e-86b9-c3dabda76651"
                                 targetObject="7f97f2a2-f748-468d-84c1-846ed37bdfa0"/>
            </rim:RegistryObjectList>
        </lcm:SubmitObjectsRequest>
    </s:Body>
</s:Envelope>

```
