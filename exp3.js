var express=require("express")
var app=express()
var art=require("express-art-template")
//设置模板引擎
// app.set("view engine","html")
app.engine("html",art)
app.get("/",(req,res)=>{
   var list=["t","b"]
   res.render("exp.html",{list:list})
})
app.listen(3000)