const mongoose = require('mongoose')

const TaskSchema=new mongoose.Schema({
    taskId:Number,
    taskTypeId:Number,
    taskName:String,
    contactId:Number,
    contactName:String,
    done:Boolean,
})

module.exports=mongoose.model('Task',TaskSchema)