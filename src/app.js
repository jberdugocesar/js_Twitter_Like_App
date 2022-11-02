import express from "express"
import morgan from "morgan"
import userRoutes from "./routes/users_routes"
import tweetsRoutes from "./routes/tweets_routes"
import likesRoutes from "./routes/likes_routes"
import followerRoutes from "./routes/followers_routes"
import timelineRoutes from "./routes/timeline_routes"


const app = express()
const path = require("path")


//Settings
app.set("port", 3700)

//Middlewares
app.use(express.json())
app.use(morgan("dev"))


//Routes
app.use("/user/", userRoutes)
app.use("/tweet/", tweetsRoutes)
app.use("/follow/", followerRoutes)
app.use("/like/", likesRoutes)
app.use("/timeline", timelineRoutes)


//FRONT-END test
app.use(express.static(path.join(__dirname+"/public/")))

export default app



