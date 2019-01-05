console.log("inisde of duck.js");

const mongoose = require("mongoose");




const DuckSchema = new mongoose.Schema({
    name: String, 
    gender: String,
    age: Number,
    favpond: String,
   })
mongoose.model('Duck', DuckSchema); 
