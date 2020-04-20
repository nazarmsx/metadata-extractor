import "reflect-metadata";
import {RDFExtractorService, FileFinder, BookImporter} from "./services"
import {container} from "tsyringe";

const bookImporter = container.resolve(BookImporter);
const fileFinder = container.resolve(FileFinder);

process.on('message', async (msg) => {
    let fileNames = msg;
    console.log('received', msg.length)
    let books = await bookImporter.importBooks(fileNames);
    process.send({books: books});
});