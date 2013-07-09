#!/usr/bin/env node

var express = require('express');
var app= express.createServer(express.logger());

app.get('/', 
  function(request, response){

     var fs = require('fs');
     var buffer = new Buffer(50);
     // var content = fs.readFileSync("index.html", "utf-8");
     buffer = fs.readFileSync("index.html");
     var content = buffer.toString("utf-8")

     response.send(content);
  }	
);


var port = process.env.PORT || 5000;
app.listen(port, 
  function(){
    console.log("Listening on port " + port);
}

);
