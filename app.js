// jshint esverion:6

const express = require('express') ;
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
  });

  app.get('/contact', function(req, res){
    res.sendFile(__dirname + "/contact.html");
  });

  app.get('/about', function(req, res){
    res.sendFile(__dirname + "/about.html");
  });

app.listen(3000,function(req,res){
    console.log('server started at port 3000')
});