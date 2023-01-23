
exports.calculation=function (){
    console.log('这是我的数学组件')
}

exports.add=function(a,b){
    return a+b
}

exports.multiply=function(a,b){
    return a*b
}


module.exports={
    name:'vera ahde',
    age:18,
    sayName:function (){
        console.log(`我是孙悟空`)
    }
}

exports.handle_remove=function(){
    console.log(`please delete the handle`)
}



module.exports= {
    name:"vera",
    age:18,
    myDateTime : function () {
        return Date()
    }
}




//Exports 和 module.Exports 通过exports. 往外暴露，module.Exports 既可以
//通过. 也可以直接赋值