import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
    var data;

    function sendResponse(statusCode, contentType) {
        res.writeHead(statusCode, { 'Content-type': contentType });
    }

    // res.writeHead(200,{'content-type':'text/html'});
    const myurl = req.url;
    const extName = path.extname(myurl);

    console.log("My Url is : " + myurl);
    console.log("Extension Name : " + extName);

    if (extName.length == 0) {
        sendResponse(200, { 'Content-Type': 'text/html' });

        switch (myurl) {
            case '/':
                {
                    data = fs.readFileSync(path.resolve('./pages/home.html'), 'utf-8');
                    res.write(data);
                    break;
                }
            case '/about':
                {
                    data = fs.readFileSync(path.resolve('./pages/about.html'), 'utf-8');
                    res.write(data);
                    break;
                }
            case '/contact':
                {
                    data = fs.readFileSync(path.resolve('./pages/contact.html'), 'utf-8');
                    res.write(data);
                    break;
                }
            case '/login':
                {
                    data = fs.readFileSync(path.resolve('./pages/login.html'), 'utf-8');
                    res.write(data);
                    break;
                }
            default:
                {
                    data = fs.readFileSync(path.resolve('./pages/error.html'), 'utf-8');
                    res.write(data);
                }

        }
        res.end();
    }
    else {
        switch (extName) {
            case '.jpg':
            case '.jpeg':
            case '.png':
                sendResponse(200, 'image/png');
                break;
            case '.css':
                sendResponse(200,  'text/css' );
                break;
            case '.js':
                sendResponse(200,  'text/js' );
                break;
        }

        data = fs.readFileSync(path.join(__dirname, myurl));
        res.write(data);
        res.end();
    }

})

server.listen(8989);