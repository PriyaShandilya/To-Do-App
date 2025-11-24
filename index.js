 const express = require("express");
 const app = express();
const methodOverride = require("method-override")
// const path = require("path")
 const port = 5500;
 app.use(express.static("public"))
 app.listen(port,()=>{
    console.log("app is listening on :",port);
 })
 app.use(methodOverride("_method"));
app.set("view engine", "ejs")

let lists = [
    {
        work : "Eat",
    },

     {
        work : "sleep",
    },
]
app.get("/", (req,res)=>{
    res.render("index.ejs",{lists})
})
app.use(express.urlencoded({
    extended:true}));

app.use(express.json());

app.post("/add",(req,res)=>{
    let {work}  = req.body;
    lists.push({work}); 
    res.redirect("/")
})

app.get("/add",(req,res)=>{
    res.render("add.ejs",{lists});
})

app.get("/edit/:work",(req,res)=>{
  let{ work} = req.params;
  let list = lists.find(l => l.work===work);
  res.render("edit.ejs",{list});
})

app.patch("/:work",(req,res)=>{
    let {work} = req.params;
    let newwork = req.body.work;
    console.log(newwork);
    let list = lists.find(l => l.work===work);
    list.work = newwork;
    res.redirect("/")
})

app.delete("/:work",(req,res)=>{
    let {work}= req.params;
     lists = lists.filter(l => l.work!=work);
     res.redirect("/")
})