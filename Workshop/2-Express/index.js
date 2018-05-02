const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoStore = require('connect-mongo');
const mgStore = mongoStore(session);
var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

app.use(session({secret:'1234', store:new mgStore({url:'mongodb://localhost:27017/test'})}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function (req, res) {
    console.log(req.session.tasks);
    // if (req.session.tasks != undefined) {
    //   res.render('index.ejs', { tasks: req.session.tasks});
    // } else {
    //     res.render("index.ejs", {tasks:[]});
    // }

    mongoClient.connect(url, function (err, client) {
        let db = client.db('test');
        db.collection('task').find().toArray(function(err, data) {
            res.render("index.ejs", {tasks:data});
        })
    })

    // res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.post('/add', function(req, res) {
    console.log(req.body.taskName);  
    
    // if (req.session.tasks == undefined) {
    //     req.session.tasks = [];    
    // };

    let tasks = { name: req.body.taskName, done: false };
    //req.session.tasks.push({name:req.body.taskName, done:false});
    let expressRes = res;
    mongoClient.connect(url, function (err, client) {
        console.log(err);
        
        let db = client.db('test');
        db.collection('task').insertOne(tasks, function(err, res) {
            console.log(err, res);
            expressRes.redirect('/');
        });
    });
})


// app.get('/test', function (req, res) {
//     res.render('views/index.html'); // 
// });

app.listen(8080);