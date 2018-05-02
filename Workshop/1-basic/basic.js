const http = require('http');

const server = http.createServer(function (req, res) {
    console.log("HEllo");
    res.writeHead(200, {"Content-Type":"text/html"});
    var message = "Fuck off world !"
    res.write(`<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="truc.css">
                    <title></title>
                </head>
                <body>
                    <h1>Hello World !!!!</h1>
                    <p>${message}</p>
                </body>
                </html>`);
    res.end();
});

server.listen(8080);