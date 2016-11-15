var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learn_javascript');

var server = app.listen(3000, function(){
        var port = server.address().port;
        console.log("Listening on port:", port);
});

app.get("/*", function(req, res, next){
    console.log("Here is a console log");
        var file = req.params[0] || 'src/index.html';
        res.sendFile(path.join(__dirname, file));
        //next();
});

app.use(bodyParser.json());

module.exports = app;
