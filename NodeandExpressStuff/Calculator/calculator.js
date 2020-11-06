const express = require('express');
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/hi",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname+"/Bmicalculator.html")
});

app.post("/bmi",(req,res)=>{
    
    let n1 =parseInt( req.body.n1);
    let n2 = parseInt(req.body.n2);
    let result =(n1/(n2*n2))*703;
 
     res.send(`<h1> the result is ${result.toFixed(2)} </h1>`);
    
 })
 



app.post("/hi",(req,res)=>{
    
   let num1 =parseInt( req.body.num1);
   let num2 = parseInt(req.body.num2);
   let result = num1+num2;

    res.send(`<h1> the result is ${result} </h1>`);
   
})







app.listen(3000,console.log("server starting at port 3000"));