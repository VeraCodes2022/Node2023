// 同步，异步文件的读取，open, read, close 流程


// 简单文件的读取
const fs=require('fs');

fs.readFile('hello3.txt', function (err,data){
    if(!err){console.log(data.toString())}
})

// fs.readFile('/Users/vera/Desktop/cat.jpeg',function (err,data){
//     if(!err){console.log(data)}
// })

let path= "/Users/vera/Desktop/cat.jpeg";
fs.readFile(path,function (err,data){
    if(!err){
        fs.writeFile('cat.jpeg',data,function (err){
            if(!err){console.log('file is copied successfully.')}
        })
    }
})


let path1="/Users/vera/Downloads/卡车修图视频教程.mp4";
fs.readFile(path1,function (err,data){
    if(!err){ fs.writeFile('卡车修图视频教程.mp4', data, function (err){
        if(!err){console.log('file2 is copied successfully.')}
    })}
})

let path2="/Users/vera/Desktop/Design/效果图/配色.jpg";
fs.readFile(path2,function (err,data){
    if(!err){fs.writeFile('banner.jpg', data,function (err){
        if(err)throw err;
    })}
})


fs.readFile("/Users/vera/Desktop/Design/效果图/APP.jpg",function (err,data){
    if(!err){fs.writeFile('jukka-cat.jpg',data,function (err){
        if(err)throw err;
    })}
})

fs.unlink('jukka-cat.jpg',function (err){
    if(err)throw err;
})

fs.unlink('hello110.txt',function (err){
    if(err)throw err;
})

fs.unlink('demofile.html',function (err){
    if(err)throw err;
})

fs.unlink('ahdevera.txt',function (err){
    if(err)throw err;
})


fs.unlink('vera-ahde.txt',function (err){
    if(err)throw err;
})


fs.unlink('mynewfile1.txt',function (err){
    if(err)throw err;
})








