//MODELO NO UTILIZADO

const mongoose = require("mongoose");
const user_local = new mongoose.Schema({
  name:  {type: String, required: true},
  age: Number,
  email:   String,
  address: {
    street: String,
    city: String,
  },
  createdAt: { 
    type: Date, 
    immutable: true,
    default: Date.now },
  followers: [{type: String}],
  publications: [{type: String}],
  likedTweets: [{type: String}]
});
   
module.exports = mongoose.model("User", user_local);