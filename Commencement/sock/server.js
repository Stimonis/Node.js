let htpp = require('http');
let fs = require('fs');  // fs = file system

let server = htpp.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// chargement de socket.io
let io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function(socket, pseudo) {
    //console.log('Un client est connecté');
    socket.emit('message', 'Vous êtes bien connecté !');
    // Si vous voulez envoyer plusieurs données différentes avec votre message, regroupez - les sous forme d'objet comme ceci par exemple :
    // socket.emit('message', { content: 'Vous êtes bien connecté !', importance: '1' });
    
    // on signale aux autres clients qu'il y a un nveau venu
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('petit_nouveau', function (pseudo) {
        socket.pseudo = pseudo;
        console.log(socket.pseudo);
        
    });

    // Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console
    socket.on('message', function(message) {
        // On récupère le pseudo de celui qui a cliqué dans les variables de session
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);   
    });
});

server.listen(8080);