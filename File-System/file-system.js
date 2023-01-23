// 文件系统 file system
// 文件系统简单来说就是通过Node模块来操作系统中的文件
// 使用文件系统需要引入fs模块，fs模块是核心模块，直接引入不需要下载。node自带的
const fs=require('fs')
// fs模块，同步会阻塞程序执行，异步不会阻塞程序执行，通过回调函数将结果返回。异步的都带callback


//同步文件的写入和读取：
// 同步文件的打开：
const fd=fs.openSync('test.txt','w')
console.log(fd);
//同步文件的写入：
fs.writeSync(fd,'今天的天气很寒冷',2);
// 同步文件的关闭：
fs.closeSync(fd)

//异步文件的写入和读取：异步通过回调函数返回的。

fs.open(
    'test.txt', 'w',
    function (err,fd){
    //这是第一层打开文件功能的回调函数参数
        if(!err)
        {fs.write(fd,'你好这是我要写入文件的内容，此内容是异步的',function (err){
            if(!err){console.log('写入成功')}

            fs.close(fd, function(err){ if(!err){console.log('文件顺利关闭')} }  )
            })
        }else{console.log(err) }
    }
)


fs.open(
    'hello.txt', 'w',
    function (err,fd){
        if(!err){
            fs.write(fd,'你好，这是我写的hello文件',
                function (err){
                    if(!err){console.log('写入hello成功')}
                }
            )
            fs.close(fd,
                function (err){
                    if(!err){console.log('hello文件顺利关闭')}
                }
            )
        }else{console.log(err)}
    }
)


console.log('程序向下执行')


fs.open('vera.txt','w',
    function (err,fd){
        if(!err){
            fs.write(
                fd,'你好我是写入的异步文件vera',
                function (err){
                    if (!err){console.log('陈宫写入vera 文件')}
                }
            )

            fs.close(fd,function (err){
                if(!err){console.log('关闭VERA文件')}
            })

        }else{console.log(err)}
    }
)






function sum(a){
    console.log('我是第一层函数')
    return (b)=>{
        console.log('我是第二层函数')
        return (c)=>{
            console.log('我是第三层函数')
            return a+b+c
        }
    }
}

console.log(sum(1)(2)(3))

