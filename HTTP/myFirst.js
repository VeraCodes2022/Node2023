var  http=require('http')
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("hello world");
})


var dt=require("../Exports/myFirstModule")
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("the date and time are currently:" + dt.myDateTime());
    res.end()
})


//
// var http=require('http')
// var PORT=8000
// http.createServer(function(req,res){
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write('hello this is my first node code.hello this is my first node code.' +
//             'hello this is my first node codehello this is my first node code' +
//             'hello this is my first node code');
//         res.end()
// }).listen(PORT)
//
//
//
// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080