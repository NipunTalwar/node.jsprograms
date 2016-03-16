var express    = require('express'),
var http       = require('http'),
var fs         = require('fs'),
var mongoose   = require('mongoose');
var bodyparser = require('bodyparser');
var path       = require('path');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/27017', function(err){
  if(err){
    console.log(err);
  } else{
    console.log('Connected to mongodb!');
  }

});

var schema = mongoose.schema({Name : 'string' , Email Id : 'string' , User Name : 'string' , Password : 'string' , confirmPassword : 'string' , profile image : 'string' });

app.post('/', function(req, res){
  new user({Name : req.body.Name, Email Id : req.body.Email,User Name : req.body.User Name,Password : req.body.Password,confirmPassword  : req.body.confirmPassword,profile image : req.body.profile image

      }).save(function(err, doc){
    if(err) res.json(err);
    else    res.send('Successfully inserted!');
  });
        /*{
              res.redirect('/login');
     }
  app.listen(3000,function(){
    console.log("Working on port 3000");
});*/



