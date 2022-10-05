import express from "express"
import morgan from "morgan"

const app = express()
const path = require("path")


//Settings
app.set("port", 3000)

//Middleware
app.use(express.json())
app.use(morgan("dev"))

//test de variables
let users = [
    {
        id: 1,
        name: "John",
        email: "john.doe@gmail.com",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane.doe@gmail.com",
    },
    {
        id: 3,
        name: "Julio",
        email: "julio.doe@gmail.com",
    }
]

//app.use(logger)

/*function logger(req, res, next){
    console.log("Manejador de petición")
    next()
}*/


/*app.all("/",(req, res, next)=>{
    console.log("Por cualquier ruta / este pasa por aca - siempre se llama esto con cada ruta")
    next()
});*/

//Front end test v1
/*app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname+"/public/index.html"))
});*/

app.post("/",(req, res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send("Post Request Received")
});

//FRONT-END test v2
app.use(express.static(path.join(__dirname+"/public/")))

export default app

