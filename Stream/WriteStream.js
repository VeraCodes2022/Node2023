//流式文件的写入 同步，异步，简单文件的写入都不合适大文件的写入，性能较差，容易导致溢出。
let fs=require('fs');
//创建水管，获取可写流。
let ws = fs.createWriteStream('hello3.txt');
//open the write stream event.
ws.once('open', function (){console.log('the write stream file is open.')})
ws.write('通过可写流写入的文件内容1');
ws.write('通过可写流写入的文件内容2');
ws.write('通过可写流写入的文件内容3');
ws.write('通过可写流写入的文件内容4');
//持续向流里写入文件
ws.once('close',function (){
    console.log('the write stream file is closed.')
})
ws.end(); //关闭流




