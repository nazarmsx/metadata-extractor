const {readdirSync} = require('fs')
import {GUTENBERG_CACHE_ROOT_DIR} from "../util/secrets";
import * as path from "path"
import {injectable} from "tsyringe";

@injectable()
export class FileFinder {
    public findRdfFilesSync(dir: string = GUTENBERG_CACHE_ROOT_DIR): string[] {
        let directories = readdirSync(dir, {withFileTypes: true})
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        return directories.map((e) => `${GUTENBERG_CACHE_ROOT_DIR}${path.sep}${e}${path.sep}pg${e}.rdf`);
    }
}