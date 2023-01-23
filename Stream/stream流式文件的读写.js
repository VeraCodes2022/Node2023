// 流式文件的读取,适合读取大文件，可以分多次读取内存中
const fs=require("fs")
//创建可读流
const rs=fs.createReadStream('/Users/vera/Desktop/React.JS/My-Library/IT/HTML+CSS/pscourse.mp4');
//创建可写流
const ws=fs.createWriteStream("b.mp4");
//监听流的开启和关闭
rs.once('open',function (){console.log('可读流打开.')})
rs.once('close',
    function (){console.log('可读流关闭.');
        ws.end()
    }
)
//读一次只能读65536字节
ws.once('open',function (){console.log('可写流打开。')})
ws.once('close', function (){console.log('可写流关闭。') })

// 将可读流中的内容加到可写流中
// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它自动会开始读取数据。
rs.on("data", function (data){
    console.log(data)
})
rs.pipe(ws)

