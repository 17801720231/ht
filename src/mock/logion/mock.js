let Mock = require('mockjs')

Mock.mock("/api/logion",function(res){
    let obj = JSON.parse(res.body)
    if(obj.name == "ybb" && obj.pw == '123'){
        return {
            status:200,
            message:"success",
            data:{user:"ybb",pw:"123",token:"1234567890asdf"}
        }
    }else{
        return {
            status:200,
            message:"fill",
            data:"登陆信息不正确"
        }
    }
})