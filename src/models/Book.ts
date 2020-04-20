import mongoose from "mongoose";

export interface BookData {
    book_id: string;
    title: string,
    author: string,
    publisher: string,
    publicationDate: Date,
    language: string,
    subjects: string[],
    rights: string,

}

export type BookDocument = mongoose.Document & BookData;

const bookSchema = new mongoose.Schema({
    book_id: {type: String, unique: true},
    title: {type: String, index: true},
    author: {type: String, index: true},
    publisher: String,
    publicationDate: {type: Date, index: true},
    language: String,
    subjects: Array,
    rights: String
});

export const Book = mongoose.model<BookDocument>("books", bookSchema);
