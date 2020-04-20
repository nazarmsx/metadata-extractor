import {RDFExtractorService} from "./RDFExtractorService"
import {Book, BookData} from "../models";
import * as fs from "fs"
import {injectable} from "tsyringe";
import * as async from "async";

@injectable()
export class BookImporter {
    constructor(private rdfExtractor: RDFExtractorService) {
    }

    async importBooks(files: string[]): Promise<BookData[]> {
        let books = [];
        let counter = 0;
        await async.eachLimit(files, 100, (fileName, cb) => {
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                }
                if (err)
                    return;

                let book = this.rdfExtractor.parseRDFData(data)
                books.push(book);
                console.log(`Processed ${++counter}/${files.length}`)
                cb(null)
            })
        });
        return books;
    }

}