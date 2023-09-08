//$("input").on("click",function(){
  //  $("label").text("done");
   // $("label").animate({opacity:0.3})
//})

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/work.html");
}) 

    app.get('/Work',(req,res) => {
         res.sendFile(__dirname+"/Work.html");
        })

app.listen(3000,() =>{
    console.log('Server is running at port 3000');
})  