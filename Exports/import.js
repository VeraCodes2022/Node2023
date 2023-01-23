var test=require("../moduleexports")
a=10;
console.log(global.a)
console.log(arguments.length)
console.log(arguments.callee+'')

// console.log(Exports)
console.log(module.exports==exports)
console.log(test.name)
console.log(test.age);
test.sayName()
test.hanldeDelete()


var obj=new Object()
obj.name="Vera"
var obj2=obj;
obj2.name="猪八戒"
obj2=null;
console.log('obj的名字现在是：'+ obj2)

const math=require('math')
console.log(math.add(111,555))
console.log(math.mul(23,45))


