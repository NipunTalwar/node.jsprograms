/*var util = require ("util");
util.log ('Timestamped Message.');*/
/*
var http = require('http');  
var server = http.createServer(function(req, res) {  
res.writeHead(200);  
res.end('<h1>Learning Node.js http module!</h1>');  
});  
server.listen(8080); */

var http = require('http');  
http.createServer(function (req, res) {  
var html = buildHtml(req);  
res.writeHead(200, {  
'Content-Type': 'text/html',  
'Content-Length': html.length,  
'Expires': new Date().toUTCString()  
});  
res.end(html);  
}).listen(8080);<p>  </p>  
function buildHtml(req) {  
var header = '';  
var body = '<h1>Node.js Tutorial by Nipun</h1><p>We are learning http module by nippo</>';<p></p>  
return '<!DOCTYPE html>'  
 + '<html><header>' + header + '</header><body>' + body + '</body></html>';<br>  
  };  

