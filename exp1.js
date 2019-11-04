//public
var exp=require("express")
var path=require("path")
var app=exp()
//静态资源中间件   express.static
//1
var sta=path.resolve(__dirname,"public")
app.use(express.static(sta))
//2
// app.use(express.static("./public"))
// express.static("./public")
app.get("/",async (req,res)=>{
    res.send("成功")
})
app.listen(3000)