import http from 'http'

// console.log(http);

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1> Helloo guys</h1>");
    res.end();
    
    
})

// server();
server.listen(8989);