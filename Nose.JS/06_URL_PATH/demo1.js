//ur;

import url from 'url';

console.log(typeof url);

// console.log(url);

var myurl = "http:www.abc.com";
var myurl = "http://localhost:8989/";
var myurl = "http://localhost:8989/admin/home/";
var myurl = "http://localhost:8989/admin/home/?id=101&name=Mahi&sal=12345";



var res = url.parse(myurl,true)

// console.log(res);
console.log(res.protocol);
console.log(res.host);
console.log(res.hostname);
console.log(res.port);
console.log(res.query);
console.log(res.pathname);
console.log("==========================================================");
console.log(res.query.id);
console.log(res.query.name);
console.log(res.query.sal);





