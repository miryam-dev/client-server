const mongoose = require('mongoose')

const TaskTypeSchema=new mongoose.Schema({
    taskTypeId:Number,
    taskTypeName:String
  
})

module.exports=mongoose.model('TaskType',TaskTypeSchema)