const mongoose = require('mongoose')

const uri = "mongodb+srv://tharusha:tharushagihan1122@cluster0.bka6qhe.mongodb.net/?retryWrites=true&w=majority"



const connect = async ()=>{
    try {
        await mongoose.connect(uri)
        .then(()=>console.log("Connect"))
    } catch (error) {
        console.log(error)
    }
}

connect()