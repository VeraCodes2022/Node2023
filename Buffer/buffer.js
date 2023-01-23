/*
 Buffer 缓冲区 的结构和数组很相似，操作方法也类似。数组中不能存储二进制文件，而buffer 专门用来存储二进制文件的。
 Buffer 是 node 的核心对象，使用buffer 不需要引入，直接用buffer 中存储的都是二进制数据,二进制数据以16进制形式显示。
 Buffer 中的每一个元素范围是从00-ff，0-255，00000000-11111111
 计算机一个0，一个1 我们称为1位 Bit
  8bit =1 byte字节[最小字节]
  1024byte=1kb 千字节
  1024kb=1mb 兆字节
  1024mb=1gb
  1024gb=1tb
*/
var str= "hello尚硅谷";
// var buf=Buffer.from(str)
// console.log(buf)
// console.log(buf.length)// 占用内存的大小
console.log(str.length) //字符串的长度
// var buf2=new Buffer(10) //10个字节
var buf2= Buffer.alloc(10)
buf2[0]=88
buf2[1]=255
buf2[2]=0xaa
buf2[4]=15
console.log(buf2[2].toString(16))
//离散数学和一些简单的线性代数离散数学，概率，统计学，数据结构
//页面和控制台上的数字是10进制
for(var i=0; i<buf2.length;i++){
    console.log(buf2[i])
}

// Buffer.from(str)将一个字符串转为buffer. Buffer.alloc(size)创建指定大小的Buffer
//Buffer.allocUnsafe()创建一个指定大小的Buffer，包含敏感数据.
//请求全是二进制数据。存在Buffer 里面，发送请求时候也在Buffer 中转化二进制去请求。
// buf.toString()把缓冲区的数据转换成字符串

const buf4=Buffer.from("im a text paragraph.")
console.log(buf4.toString() )