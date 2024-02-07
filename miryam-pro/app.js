require("dotenv").config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const express=require('express')
const app=express();
app.use(bodyParser.json())
app.use(cors());

// app.listen(8000,()=>{
//     console.log("port 8000")
// })
const taskMiddellWare=(req,res,next)=>{
console.log(`the source is ${req.url}`)
next()
}
app.use(taskMiddellWare)
const router=require('./routes/tasks')
app.use('/tasks',router)
const router2=require('./routes/users')
app.use('/users',router2)



// const CONECTION_URL='mongodb+srv://miryam183252:<mg9744281>@cluster0.qyzjstj.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));