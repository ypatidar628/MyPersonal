import http, { createServer } from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    const myurl = req.url;
    console.log(myurl);

    switch (myurl) {

        case '/': {
            fs.readFile('./pages/home.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })

            break;
        }
        case '/about': {
            fs.readFile('./pages/about.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })

            break;
        }
        case '/contact': {
            fs.readFile('./pages/contact.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })

            break;
        }
        case '/login': {
            fs.readFile('./pages/login.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })

            break;
        }
        default: {
            fs.readFile('./pages/error.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })


        }
    }
})

server.listen(8989)