
const express=require('express')
const axios=require('axios')
const cheerio=require('cheerio')
const { response } = require('express')
const app=express()



// app.get('/', (req,res)=>{
//     res.json('我是hello模块')
// }).listen(8000)


app.get('/news' ,(req,res)=>{
    res.json('this this the news page.')
})


exports.x="我是hello模块中暴露出来的文件"
exports.y=2000
exports.fn=function (){}
