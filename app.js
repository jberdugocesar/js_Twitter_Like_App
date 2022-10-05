const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname+"/index.html"))
});

app.post("/",(req,res)=>{
    res.send("Post Request Received");
});

app.listen(8000,() => {
    console.log("Server listening in port: 8000");
});

