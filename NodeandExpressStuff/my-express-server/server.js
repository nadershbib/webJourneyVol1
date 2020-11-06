const express = require('express');
const app = express();
app.get("/",(req,res)=>{

res.send("Hello World, I hope I leave this world");

});
app.get("/contacts",(req,res)=>{
    res.send("ANONYMOUS");
});
app.get("/about",(req,res)=>{
    res.send("I am Nader w ma bsewe shi bel hayet");
});
app.get("/hobbies",(req,res)=>{
   res.send("freestyle,Hello world programming,Hello world")
});
app.listen(3000,()=>console.log("SERVER STARTED AT PORT 3000"));