var http = require('http');

http.createServer(function(req,res){
  res.end("Ola");
}).listen(8081);

console.log("Servidor Rodando bem rápido!");
console.log("Servidor Rodando bem rápido mesmo!");