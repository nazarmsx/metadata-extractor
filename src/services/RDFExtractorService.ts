import {injectable} from "tsyringe";
import * as fs from "fs"
import {parse} from "fast-xml-parser"
import {BookData} from "../models";

@injectable()
export class RDFExtractorService {

    constructor() {
    }

    parseRDFData(data: string): BookData {
        let doc = parse(data, {ignoreAttributes: false});
        doc = doc['rdf:RDF']['pgterms:ebook'];
        let res: BookData = {
            book_id: doc['@_rdf:about'] ? doc['@_rdf:about'].substr(7) : '',
            title: doc['dcterms:title'],
            author: this.extractAuthor(doc),
            publisher: doc['dcterms:publisher'],
            publicationDate: doc['dcterms:issued']['#text'],
            language: this.extractLanguage(doc),
            subjects: this.extractSubjects(doc),
            rights: doc['dcterms:rights'],
        };
        if(Array.isArray(res.title)){
            res.title=res.title.join(',');
        }
        return res;
    }

    private extractAuthor(obj: any) {
        if (obj['dcterms:creator'] && obj['dcterms:creator']['pgterms:agent']) {
            return obj['dcterms:creator']['pgterms:agent']['pgterms:name']
        }
        return null;
    }

    private extractLanguage(obj: any) {
        if (obj['dcterms:language'] && obj['dcterms:language']['rdf:Description']) {
            return obj['dcterms:language'] ['rdf:Description'] ['rdf:value']['#text']
        }
        return null;
    }

    private extractSubjects(obj: any): string[] {
        if (obj['dcterms:subject'] && Array.isArray(obj['dcterms:subject'])) {
            return obj['dcterms:subject'].map((e: any) => {
                if (e['rdf:Description'] && e['rdf:Description']['rdf:value']) {
                    return e['rdf:Description']['rdf:value']
                }
                return null;
            }).filter((e: string) => e !== null)
        }
        return null;

    }
}

function test() {
    const parser = new RDFExtractorService();

    fs.readFile("F://rdf-files//cache//epub\\\\10068\\\\pg10068.rdf", 'utf8', (err, data) => {
        console.log(parser.parseRDFData(data))
    })
}