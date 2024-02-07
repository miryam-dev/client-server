const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    id:String,
    name:String,
    manager:Boolean,
    emailAdress:String,
    phone:String
})


module.exports=mongoose.model('User',UserSchema)