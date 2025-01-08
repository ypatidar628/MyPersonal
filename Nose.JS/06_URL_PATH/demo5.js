import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from 'path';

var new_file_path = path.join(__dirname,'demo2.js');
console.log(new_file_path);

console.log(__dirname);

new_file_path = path.join(__dirname,'abcd','hello.txt');
console.log(new_file_path);
