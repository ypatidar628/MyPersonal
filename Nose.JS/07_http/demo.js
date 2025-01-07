import http from 'http'

// console.log(http);

const server = http.createServer((req,res)=>{
    console.log("Server Invoked : Request come=>");
    console.log("Response object is :"+res);
    res.write("<h1> Helloo guys</h1>");
    res.end();
    
    
})

// server();
server.listen(8989);