const http=require('http')
const {readFile}=require('fs')

//use http showing simple responsive text
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello world');
    res.end();
})

//use http showing responsive text
http.createServer(function (req,res){
    readFile('./readContent.txt', 'utf8',function (err,result){
        if(err)throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(result);
        res.end();
    })
})


//use http showing responsive html file
http.createServer(function (req,res){
    readFile('./readContent.html','utf8',function (err,data){
        if(err)throw err;
        res.write(data);
        res.end();
    })
}).listen(8000)




