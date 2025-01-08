import http,{createServer} from 'http'

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})
    const myurl = req.url;
    console.log(myurl);
    
    switch(myurl){

        case '/':{
            res.write("<h1>Home url invoked !</h1>");
            res.end();
            break;
        }
        case '/about':{
            res.write("<h1>ABout url invoked !</h1>");
            res.end();
            break;
        }
        case '/contact':{
            res.write("<h1>Contact url invoked !</h1>");
            res.end();
            break;
        }
        case '/login':{
            res.write("<h1>Login url invoked !</h1>");
            res.end();
            break;
        }
        default:{
            res.write("<h1>Error url invoked !</h1>");
            res.end();
            break;
        }
    }
})

server.listen(8989)