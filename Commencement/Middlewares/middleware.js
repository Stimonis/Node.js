let express = require('express');
let morgan = require('morgan');  // Charge le middleware de login
// let favicon = require('serve-favicon'); // Charge le middleware de favicon

let app = express();

app.use(morgan('combined')) // Active le middleware de login
    .use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
   // .use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
    .use(function(req, res) {
        res.send('Hello');
    });

app.listen(8080);