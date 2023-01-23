let uc=require('upper-case');
let http=require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase('hello cat world'))
    res.end()
})

