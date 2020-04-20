import "reflect-metadata";
import {container} from "tsyringe";
import {RDFExtractorService} from "../src/services"
import * as mocha from 'mocha';

const rdfExtractorService = container.resolve(RDFExtractorService);
import {expect} from "chai";
import {getRdfData} from './test.data'


let bookData: string = getRdfData();
let parsedData: any;

beforeEach(async () => {
    parsedData = rdfExtractorService.parseRDFData(bookData);
});

describe("RDFExtractorService.parseRDFData", () => {
    it("should return object", () => {
        expect(parsedData).is.not.null;
    });
    it("should return book with id", () => {
        expect(parsedData).to.have.property('book_id');
    });
    it("should have publisher to be equal 'Project Gutenberg'", () => {
        expect(parsedData).to.deep.include({publisher: "Project Gutenberg"});
    });
    it("should have subjects array", () => {
        expect(parsedData.subjects).to.be.a('array');
    });
});
