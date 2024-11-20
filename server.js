//1:import http module
var http = require('http')
var server = http.createServer()
server.listen(8080,function(){
    console.log('http://127.0.0.1:8080');
})
server.on('request',function(req,res){
    console.log('fuck u')
    res.write('fuck u rrrrr')
    res.end('hello worlderewrerterter')
})
