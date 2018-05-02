// On installe d'abord le template voulu, ici on va utiliser EJS (Embedded JavaScript)
let express = require('express');
let app = express();

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});


// Ce code fait appel à un fichier chambre.js, que l'on a créé dans le fichier views
// La balise <%= etage %> sera remplacée par la variableetageque l'on a transmise au template avec{etage: req.params.etagenum}!

// Plusieurs paramètres et des boucles :

app.get('/computer/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.listen(8080);