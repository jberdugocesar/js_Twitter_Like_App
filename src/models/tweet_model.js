import user from '../models/user_model'


//MODELO NO UTILIZADO

const mongoose = require("mongoose");

const tweet_local = new mongoose.Schema({
  postedBy: String,
  body: String,
  createdAt: { 
    type: Date, 
    immutable: true,
    default: Date.now 
  }, 
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },
  userMarkedLike: [{type: String}],

});
   
module.exports = mongoose.model("Tweet", tweet_local);