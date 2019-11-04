var express=require("express")
var app=express()
var router=express.Router();
app.use(router)
//验证码的接口
router.get("/",async    (req,res)=>{
res.send("a")
})
router.get("/code",(req,res)=>{
    /*
    随机数 Math.random 0-1
    */
   var random=function(min,max){
       return Math.ceil(Math.random()*(max-min)+min)
   }
   var str="afdsgjklkzlmqupo237828304"
   var result=""
   for(var i=0;i<4;i++){
    result+=str[random(0,str.length-1)]
   }
   
   console.log(str[random(0,str.length-1)])
    res.send({"success":"ok","data":result})
})
app.listen(3000)