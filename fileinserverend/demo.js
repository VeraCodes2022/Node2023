const http=require('http');
const fs=require('fs');
const url=require('url');
const express = require("express");
const app=express()


const path1="/Users/vera/Desktop/Design/效果图/自然堂.jpg"
fs.readFile(path1,function (err,data){
    if(!err){fs.writeFile('pic1.jpg',data,function (err){
        if(err)throw err;
    })}
})


http.createServer(function (req,res){
    let q=url.parse(req.url,true)
    let filename="."+ q.pathname;
    fs.readFile(filename,function (err,data){
        if(err){res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('404 Not Found.')
        }
        res.write(data);
        return res.end();
    });
})







