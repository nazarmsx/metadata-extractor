export function getRdfData() {
    return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
        "<rdf:RDF xml:base=\"http://www.gutenberg.org/\"\n" +
        "  xmlns:cc=\"http://web.resource.org/cc/\"\n" +
        "  xmlns:dcterms=\"http://purl.org/dc/terms/\"\n" +
        "  xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\"\n" +
        "  xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n" +
        "  xmlns:dcam=\"http://purl.org/dc/dcam/\"\n" +
        "  xmlns:pgterms=\"http://www.gutenberg.org/2009/pgterms/\"\n" +
        ">\n" +
        "  <pgterms:ebook rdf:about=\"ebooks/11\">\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11.zip\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2014-01-25T05:34:22</dcterms:modified>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">60732</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N268d43090f1a421b815d623681610df3\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/zip</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N505b3f78ca274fbb8e339f0d9b129bf9\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/plain; charset=us-ascii</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:creator>\n" +
        "      <pgterms:agent rdf:about=\"2009/agents/7\">\n" +
        "        <pgterms:alias>Dodgson, Charles Lutwidge</pgterms:alias>\n" +
        "        <pgterms:name>Carroll, Lewis</pgterms:name>\n" +
        "        <pgterms:webpage rdf:resource=\"https://en.wikipedia.org/wiki/Lewis_Carroll\"/>\n" +
        "        <pgterms:deathdate rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">1898</pgterms:deathdate>\n" +
        "        <pgterms:birthdate rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">1832</pgterms:birthdate>\n" +
        "      </pgterms:agent>\n" +
        "    </dcterms:creator>\n" +
        "    <dcterms:description>An improved version is available at #28885.</dcterms:description>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/ebooks/11.epub.noimages\">\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">185793</dcterms:extent>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:35.510959</dcterms:modified>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nfd87b00840984e29af3e56be56e53031\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/epub+zip</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/ebooks/11.kindle.images\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:36.070974</dcterms:modified>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">545281</dcterms:extent>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N4e15e04a19be4e509ba3fe9f0ab19333\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/x-mobipocket-ebook</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/ebooks/11.kindle.noimages\">\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N8c2ef464615548d491e1374ac0461299\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/x-mobipocket-ebook</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">545169</dcterms:extent>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:36.664968</dcterms:modified>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:issued rdf:datatype=\"http://www.w3.org/2001/XMLSchema#date\">2008-06-27</dcterms:issued>\n" +
        "    <pgterms:bookshelf>\n" +
        "      <rdf:Description rdf:nodeID=\"N94e8abfad38448dd8bd86116b880c431\">\n" +
        "        <rdf:value>Children's Literature</rdf:value>\n" +
        "        <dcam:memberOf rdf:resource=\"2009/pgterms/Bookshelf\"/>\n" +
        "      </rdf:Description>\n" +
        "    </pgterms:bookshelf>\n" +
        "    <dcterms:license rdf:resource=\"license\"/>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-h.zip\">\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nce1e11a8a23948899989b96b19fa5f35\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/html; charset=utf-8</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">165880</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N1525d1fb2aff4f41ac2972bee79a88e1\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/zip</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-02-22T11:19:34</dcterms:modified>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-pdf.zip\">\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N068ea6ea214144e4bb8498f722ab5e82\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/zip</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N21d45e8f27e84388bedc0ca6b816429b\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/pdf</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">524031</dcterms:extent>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2011-12-20T16:25:40</dcterms:modified>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <pgterms:downloads rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">42355</pgterms:downloads>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11.txt\">\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nfd53e32007c44e0c98e5f1a8e5c17349\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/plain; charset=us-ascii</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2014-01-25T05:32:46</dcterms:modified>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">167546</dcterms:extent>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"N9ae0d1ca41064527bb43987000b45a20\">\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCC\"/>\n" +
        "        <rdf:value>PZ</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:type>\n" +
        "      <rdf:Description rdf:nodeID=\"N33316aaee41d46fe96ac0357fa8a9c63\">\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/DCMIType\"/>\n" +
        "        <rdf:value>Text</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:type>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg\">\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N4adc445e573d4242bb11ff18c74c2362\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">image/jpeg</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">21635</dcterms:extent>\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:36.728948</dcterms:modified>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:title>Alice's Adventures in Wonderland</dcterms:title>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"N5ce80d81017b4a9b85966af7e92df355\">\n" +
        "        <rdf:value>Children's stories</rdf:value>\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCSH\"/>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"Nc6002d3b43214ca5857dbeec58ce17b7\">\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCSH\"/>\n" +
        "        <rdf:value>Alice (Fictitious character from Carroll) -- Juvenile fiction</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/ebooks/11.epub.images\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:35.355977</dcterms:modified>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nb37375c0e5d942fbb56462db8a33eb0a\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/epub+zip</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">185793</dcterms:extent>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-0.txt\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-02-22T18:53:00</dcterms:modified>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">174481</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N3c9b024d128e4638ae5692edd6a674f4\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/plain; charset=utf-8</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-pdf.pdf\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2011-12-20T11:00:56</dcterms:modified>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">711671</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N50510b7ecbd748249a48d893c82485ad\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/pdf</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-0.zip\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-02-22T11:19:34</dcterms:modified>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N0a7a042e80524cc19d4b27e92f5dae43\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/zip</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">61495</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nda8727a4bc2a480cbfcf6d4808a8ad67\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/plain; charset=utf-8</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:publisher>Project Gutenberg</dcterms:publisher>\n" +
        "    <dcterms:language>\n" +
        "      <rdf:Description rdf:nodeID=\"N964da88e0b604fbfbaff2c9322b80e41\">\n" +
        "        <rdf:value rdf:datatype=\"http://purl.org/dc/terms/RFC4646\">en</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:language>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/files/11/11-h/11-h.htm\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-02-22T11:15:30</dcterms:modified>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Nb121985160ed4463b08ba2f41a3b8a94\">\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">text/html; charset=utf-8</rdf:value>\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">202958</dcterms:extent>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"N83b79381d3374b5789d8684ad567015d\">\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCC\"/>\n" +
        "        <rdf:value>PR</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"Naeb2a51d4e5f4356a74c4476a0fb89d9\">\n" +
        "        <rdf:value>Fantasy fiction</rdf:value>\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCSH\"/>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:rights>Public domain in the USA.</dcterms:rights>\n" +
        "    <dcterms:subject>\n" +
        "      <rdf:Description rdf:nodeID=\"N48977bd91e4047ab8e92ad333db76377\">\n" +
        "        <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/LCSH\"/>\n" +
        "        <rdf:value>Imaginary places -- Juvenile fiction</rdf:value>\n" +
        "      </rdf:Description>\n" +
        "    </dcterms:subject>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/cache/epub/11/pg11.cover.small.jpg\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-01T03:30:36.698943</dcterms:modified>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">3548</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"Ndd0cf9b29e784ecd81b72f570e518f6e\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">image/jpeg</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "    <dcterms:alternative>Alice in Wonderland</dcterms:alternative>\n" +
        "    <dcterms:hasFormat>\n" +
        "      <pgterms:file rdf:about=\"http://www.gutenberg.org/ebooks/11.rdf\">\n" +
        "        <dcterms:modified rdf:datatype=\"http://www.w3.org/2001/XMLSchema#dateTime\">2020-04-09T05:00:05.135879</dcterms:modified>\n" +
        "        <dcterms:extent rdf:datatype=\"http://www.w3.org/2001/XMLSchema#integer\">17147</dcterms:extent>\n" +
        "        <dcterms:format>\n" +
        "          <rdf:Description rdf:nodeID=\"N7c62115839094dcb933f5b95fb1d8850\">\n" +
        "            <dcam:memberOf rdf:resource=\"http://purl.org/dc/terms/IMT\"/>\n" +
        "            <rdf:value rdf:datatype=\"http://purl.org/dc/terms/IMT\">application/rdf+xml</rdf:value>\n" +
        "          </rdf:Description>\n" +
        "        </dcterms:format>\n" +
        "        <dcterms:isFormatOf rdf:resource=\"ebooks/11\"/>\n" +
        "      </pgterms:file>\n" +
        "    </dcterms:hasFormat>\n" +
        "  </pgterms:ebook>\n" +
        "  <cc:Work rdf:about=\"\">\n" +
        "    <cc:license rdf:resource=\"https://creativecommons.org/publicdomain/zero/1.0/\"/>\n" +
        "    <rdfs:comment>Archives containing the RDF files for *all* our books can be downloaded at\n" +
        "            http://www.gutenberg.org/wiki/Gutenberg:Feeds#The_Complete_Project_Gutenberg_Catalog</rdfs:comment>\n" +
        "  </cc:Work>\n" +
        "  <rdf:Description rdf:about=\"https://en.wikipedia.org/wiki/Lewis_Carroll\">\n" +
        "    <dcterms:description>Wikipedia</dcterms:description>\n" +
        "  </rdf:Description>\n" +
        "</rdf:RDF>\n"
}