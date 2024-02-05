const app = require("./server")
const mongoose = require("mongoose")
const connect = require("./connect")
const controll = require('./controll')

app.get("/getTODOS", (req, res)=>{
    controll.getTODO(req, res)
})

app.post("/addTODO", (req, res)=>{
    controll.addTODO(req, res)
})
