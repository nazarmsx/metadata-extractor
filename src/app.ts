import "reflect-metadata";
import mongoose from "mongoose";
import {MONGODB_URI} from "./util/secrets";
import {Book} from "./models";
const os = require('os');
import { FileFinder} from "./services"
import {container} from "tsyringe";
import to from 'await-to-js';
import {chunkify} from "./util";
import * as path from "path";
const {fork} = require('child_process');

const fileFinder = container.resolve(FileFinder);

async function start() {
    const mongoUrl = MONGODB_URI;
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    let [err,] = await to(mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    }));
    if (err) {
        console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
        process.exit();
    }
    await Book.deleteMany({});

}

start().then(() => {
    let fileNames = fileFinder.findRdfFilesSync();
    fileNames = fileNames.slice(0, 100);
    const cpuCount = os.cpus().length;
    let completedWorkers = 0;
    let workersData = chunkify(fileNames, cpuCount, false);

    for (let i = 0; i < cpuCount; ++i) {
        let forked = fork(`dist${path.sep}worker.js`, {});

        forked.send(workersData[i]);
        forked.on('message', async (msg) => {
            if (msg.books) {
                let [err,] = await to(Book.create(msg.books))
                if (err) {
                    console.error(err);
                }
                completedWorkers += 1;
                if (completedWorkers === cpuCount) {
                    console.log('Import finished!');
                    process.exit()
                }
            }
            console.log(`Worker № ${i} finished`);
        });
    }


});


