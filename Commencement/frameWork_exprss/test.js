// Exo 1 Les routes simples :

// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Vous êtes à l\'accueil');
// });

// app.listen(8080);

// Exo 2

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Vous êtes à l\'accueil !!!!');
// });

// app.get('/sous-sol', function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !!!');
// });

// app.get('/etage/1/chambre', function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Hé ho,c\'est privé ici !');
// });

// // Pour afficher les erreurs 404 :
// app.use(function (req, res, next) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.status(404).send('Page introuvable !');
// });

// app.listen(8080);

// Exo 3 Les routes dynamiques

applicationCache.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n° ' + req.params.etagenum);
});


app.listen(8080);