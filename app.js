const express = require("express")
const app = express()
const path = require("path")
const morgan = require("morgan")

//Settings
app.set("appName","Twitter Like App Initialized")
app.set("port",3000)

//Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(logger)

function logger(req, res, next){
    console.log("Manejador de petición")
    next()
}


app.all("/",(req, res, next)=>{
    console.log("Por cualquier ruta / este pasa por aca - siempre se llama esto con cada ruta")
    next()
});

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname+"/public/index.html"))
});

app.post("/",(req, res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send("Post Request Received")
});

app.use(express.static("public"))

app.listen(app.get("port"),() => {
    console.log(app.get("appName"))
    console.log("Server listening on port: "+app.get("port"));   
});

