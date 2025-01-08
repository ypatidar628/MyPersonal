import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Object of path function dirname ",dirname);
console.log("Object of path function fileURLToPath ",fileURLToPath);
console.log("File url path",__filename);
console.log("Dir url path ",__dirname);