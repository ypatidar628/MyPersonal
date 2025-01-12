import http from 'http'
import fs from 'fs'
import path from 'path'
const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{'content-type':'text/html'});
    const myurl = req.url;
    console.log(myurl)

    switch(myurl)
    {
       case '/':
        {
          var data = fs.readFileSync(path.resolve('./pages/home.html'),'utf-8');
          res.write(data);
          res.end();
          break;
        }
        case '/about':
        {
            var data = fs.readFileSync(path.resolve('./pages/about.html'),'utf-8');
          res.write(data);
          res.end();
          break;
        }
        case '/contact':
        {
            var data = fs.readFileSync(path.resolve('./pages/contact.html'),'utf-8');
          res.write(data);
          res.end();
          break;
        }
        case '/login':
        {
            var data = fs.readFileSync(path.resolve('./pages/login.html'),'utf-8');
            res.write(data);
            res.end();
          break;
        }
        default:
        {
            var data = fs.readFileSync(path.resolve('./pages/error.html'),'utf-8');
            res.write(data);
            res.end();  
        }

    }

})

server.listen(8989);