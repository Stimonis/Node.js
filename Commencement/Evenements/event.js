// Exo 1

// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200);
//     res.end('Salut tout le monde');
// });

// server.on('close', function() {
//     console.log('Bye bye !');
// });


// Exo 2

var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200);
});

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message) {
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');

server.listen(8080);

server.close();