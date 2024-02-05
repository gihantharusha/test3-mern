const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TODOSchema = new Schema({
    title:String,
    description: String
})

const TODO = mongoose.model("TODO", TODOSchema)

module.exports = TODO