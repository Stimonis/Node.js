
// // Exo 1 :

// var http2 = require('http');
// // require effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur webrequire effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur webrequire effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur web

// var server2 = http2.createServer(function(req, res) {
//      // req = request, res = result
//     // on renvoie le code 200 dans l'en-tête de la réponse, qui signifie au navigateur "OK tout va bien" (on aurait par exemple répondu 404 si la page demandée n'existait pas
//     res.writeHead(200);
//     res.end('Salut tout le monde !');
// });

// //On appelle la fonction createServer() contenue dans l'objet http et on enregistre ce serveur dans la variable server


// //Enfin, le serveur est lancé et "écoute" sur le port 8080 avec l'instruction 
// server2.listen(8080);


// Exo 2 : ajouter de l'HTML

// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200,{"Content-Type": "text/html"});
//     res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
// });
// server.listen(8080);


// Exo 3 : 

// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write('<!Doctype html>' +
//     '<html>' +
//         '<head>' +
//             '<meta charset="utf-8" />' +
//             '<title>Ma page Node.js</title>' +
//         '</head>' +
//         '<body>' +
//             '<p>Voici un paragraphe <strong>HTML</strong> !</p>' +
//         '</body>' +
//    ' </html>');
//    res.end();
// });


// EXO 4

// var http = require('http');
// var url = require('url');

// var server = http.createServer(function(req, res) {
//     // on va parser la requête de l'utilisateur
//     var page = url.parse(req.url).pathname;
//     // console.log se verra dans le terminal
//     console.log(page);
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write('<!Doctype html>' +
//     '<html>' +
//         '<head>' +
//             '<meta charset="utf-8" />' +
//             '<title>Ma page Node.js</title>' +
//         '</head>' +
//    ' </html>');
//     if (page == '/') {
//         res.write('Vous êtes à l\'accueil, que puis-je pour vous?');
//     } 
//     else if (page == '/sous-sol') {
//         res.write('Vous êtes dans la cave à vin, ces bouteilles sont à moi !');
//     }
//     else if (page == '/etage/1/chambre') {
//         res.write('Dégage d\'ici c\'est privé !!!');
//     }
//     else {
//         res.write('Bien le bonjour');
//     }
//     res.end();
// });

// Exo 5

var http = require("http");
var url = require("url");
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"})
    if ('prenom' in params || 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
//Deux petites précisions par rapport à ce code : 'prenom' in params me permet en JavaScript de tester si le tableau contient bien une entrée 'prenom'. S'il manque un paramètre, je peux alors afficher un message d'erreur (sinon mon script aurait affichéundefinedà la place).
//Par ailleurs, vous constaterez que je ne vérifie pas la page qui est appelée.Ce code fonctionne aussi bien que l'on soit sur http://localhost:8080 ou sur http://localhost:8080/pageimaginaire. Il faudrait combiner ce code et le précédent pour gérer à la fois la page ET les paramètres.


server.listen(8080);