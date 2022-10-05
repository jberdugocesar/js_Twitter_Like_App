const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())
app.use(logger)

function logger(req, res, next){
    console.log("Manejador de petición")
    next()
}


app.all("/",(req, res, next)=>{
    console.log("Por cualquier ruta / este pasa por aca")
    next()
});

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"))
});

app.post("/",(req, res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send("Post Request Received")
});


app.listen(8000,() => {
    console.log("Server listening in port: 8000")
});

