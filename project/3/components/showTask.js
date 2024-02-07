import React, { useState } from "react";
import { connect } from "react-redux";
import { removTask, updateTask } from "../redux/action";
import PrevNext from "./prevnext";
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";

// task.img.map(x=>(import x from "../img"));
export default connect()(function ShowTask(props){
    const{task,typeList,dispatch,setShow}=props;
    console.log(task);
    const[done,setDone]=useState(task.done);
  console.log("hh",task.done);

    function remove(){
      debugger
      dispatch(removTask(task.taskId));
      setShow(0)
    }
    function update(){
      dispatch(updateTask(task.taskId))
      setDone(true);

    }

    return(<>
      <h1>שם המשימה:{task.taskName}</h1>
      <h2>סוג המשימה:{typeList.find(x=>x.taskTypeId==task.taskTypeId).taskTypeName}</h2>
      <h3>מבצע המשימה:{task.contactName}</h3>
      <h4> האם המשימה נעשתה?:{String(done)}</h4>


      <Button variant="outlined"  onClick={()=>remove()}>למחיקת המשימה <DeleteIcon /></Button>
      <Button variant="outlined"  onClick={()=>update()}> לעדכון ביצוע המשימה</Button>
      <Button variant="outlined"  onClick={()=>setShow(0)}> חזור</Button>
      


    </>)
})