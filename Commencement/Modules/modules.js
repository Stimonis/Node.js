// Exo 1

// on a créé un module "monmodule.js" dans le dossier node_module

// var monModule = require('monmodule');

// monModule.direBonjour();
// monModule.direByeBye();

// Exo 2

// on a installé localement un nv module, le module markdown, on va intéragir avec

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));


