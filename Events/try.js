let events=require('events');
let eventEmitter=new events.EventEmitter();
let fs=require('fs')


// fs.open 创建文件
fs.open('demon.txt','w',function (err){
    if(err)throw err;
})
//创建文档可读流
let rs=fs.createReadStream('./demon.txt')

//打开文件
rs.on(
    'open', function (err){
        console.log('the file is open')
    }

)

// 事件发送对象

let myEventHandler=function (){
    console.log('i created an event handler.')
}

eventEmitter.on('create',myEventHandler)
eventEmitter.emit('create')
