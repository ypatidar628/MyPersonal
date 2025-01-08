import path from 'path';

var new_file_path = path.resolve('demo2.js');
console.log(new_file_path);

new_file_path = path.resolve('abcd','hello.txt');
console.log(new_file_path);
