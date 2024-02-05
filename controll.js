const TODO = require("./model")


const getTODO = (req, res)=>{
    TODO.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>res.send(err))
}

const addTODO = (req, res)=>{
    const todo = TODO ({
        title: req.query.title,
        description: req.query.dec
    })

    todo.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports = {getTODO, addTODO}