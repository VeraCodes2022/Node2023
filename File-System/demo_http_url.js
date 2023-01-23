// // var HTTP=require('HTTP');
// // HTTP.createServer(function (req,res){
// //     res.writeHead(200,{'Content-Type':'text/html'})
// //     res.write(req.url)
// //     res.end()
// // })
//
// //打印的结果是 / summer, winter
// //
// // var url=require('url');
// // HTTP.createServer(function (req,res){
// //     res.writeHead(200,{'Content-Type':'text/html'});
// //     var q=url.parse(req.url,true).query;
// //     var txt=q.year+ " " + q.month;
// //     res.end(txt)
// // }).listen(8000)
//
//
// // var HTTP = require('HTTP');
// // var url = require('url');
// //
// // HTTP.createServer(function (req, res) {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     var q = url.parse(req.url, true).query;
// //     var txt = q.year + " " + q.month;
// //     res.end(txt);
// // }).listen(8000);
//
// // var HTTP=require('HTTP');
// let fs=require('fs');
// // HTTP.createServer(function (req,res){
// //  fs.readFile('demofile.html',function(err,data){
// //      res.writeHead(200,{'Content-Type':'text/html'});
// //      res.write(data);
// //      return res.end()
// //  })
// //
// // }).listen(8000)
//
//
// //用fs系统创建文件data是写文件内容
//
//
//
//
// //创建文件并写入内容：
// fs.writeFile('ahdevera.txt','hello jukka and lucy, we will go to sleep soon.',
//     function(err){
//         if(err)throw err;
//         console.log('file created.')
//         }
// )
// fs.writeFile('hello110.txt','hello this is my text.',function (err){
//     if(err)throw err;
// })
//
// //给已有的文件增加内容：
// fs.appendFile('hello110.txt','newly added 1 once,hello content.',function (err){
//     if(err) throw err;
// })
//
// fs.appendFile('hello110.txt','newly added 2 twice,hello content.', function (err){
//     if(err)throw err;
// })
//
// //open 也可以创建文件。
// fs.open('vera.txt','w',function (err){
//     if(err) throw err;
//     console.log('open_saved.')
// })
//
//
// fs.rename('vera.txt','vera-ahde.txt',function (err){
//     if(err)throw err;
//     console.log('renamed.')
// })
//
//
//









