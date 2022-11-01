// pretendiendo conexión a base de datos utilizando la variable data
const userdata = []
const tweetdata = []
const likedata = []
const followerdata = []
const timelinedata = []


//Metodos de Usuario
const getUser = (req, res) =>{
    res.json("get Users")
}

const createUser = (req, res) =>{
    res.json("create")
}

const deleteUser = (req, res) =>{
    res.json("delete")
}

const updateUser = (req, res) =>{
    res.json("update")
}

//Metodos de Tweets
const getTweet = (req, res) =>{
    res.json("get Tweets")
}

const createTweet = (req, res) =>{
    res.json("create")
}

const deleteTweet = (req, res) =>{
    res.json("delete")
}

const updateTweet = (req, res) =>{
    res.json("update")
}

//Metodos de Followers
const getFollower = (req, res) =>{
    res.json("get Followers")
}

const createFollower = (req, res) =>{
    res.json("create")
}

const deleteFollower = (req, res) =>{
    res.json("delete")
}

//Metodos de Likes
const getLike = (req, res) =>{
    res.json("get Likes")
}

const createLike = (req, res) =>{
    res.json("create")
}

const deleteLike = (req, res) =>{
    res.json("delete")
}


//Metodo de Timeline
const getTimeline = (req, res) =>{
    res.json("Get Timelines")
}

export const userMethods = {
    getUser,
    createUser,
    deleteUser,
    updateUser
}

export const tweetMethods = {
    getTweet,
    createTweet,
    deleteTweet,
    updateTweet
}

export const followerMethods = {
    getFollower,
    createFollower,
    deleteFollower
}

export const likeMethods = {
    getLike,
    createLike,
    deleteLike
}

export const timelineMethods = {
    getTimeline
}

