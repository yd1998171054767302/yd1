var exp=require("express")
var cook=require("cookie-parser")
//cookie中间件
var app=exp()
//让cookie和express建立联系
app.use(cook())
var path=require("path")

var sta=path.resolve(__dirname,"public")
app.use(exp.static(sta))
app.get("/",async (req,res)=>{
    res.send("成功")
})
app.get("/login",async (req,res)=>{
    var obj=req.query.username
    
    // req.cookies=obj
    //cookie maxAge 过期时长 httpOnly 只允许在服务器端修改cookie值
    //signed 是否生成签名 domain域名  secure
    res.cookie(new Date()+"username",obj,{maxAge:9000,httpOnly:true})

    res.send({"data":obj})
    /**
     * 什么是cookie？
     * 是存在访问计算机的一个变量，便于访问同一域名或服务器存贮的用户信息
     * 为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
     * cookie 的优缺点？
     * 优点：
     * 协助服务器承受压力
     * 存在过期时间，不便于攻击者进行攻击
     * 缺点：
     * 长度限制
     * 安全性低
     * 存储量小
     * cookie的大小？4kb
     * 
     * cookie的安全性？
     * 相对较低
     * 如何解决？
     * 生成标签
     * cookie的特点？
     * cookie保存在浏览器本地
     * cookie默认不加密，用户之间可以看到
     * cookie支持被删除
     * cookie便于攻击
     * cookie易被篡改
     * 
     * 
     * 
     * 
     */
})
app.listen(3000)