import { connect } from "react-redux";
import React, { useRef, useState } from "react";
import ShowTask from "./showTask";
import ShowTasks from "./showTasks";
import { addType } from "../redux/action";


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";

function mapStateToProps(state){
    return {contactList:state.users.contactList,
             taskList:state.tasks.taskList,
             typeList:state.tasks.typeList
}
}
export default connect(mapStateToProps)(function Manager(props){
const{contactList,taskList,typeList,dispatch}=props;
const[id,setId]=useState(0);
const[flag,setFlag]=useState(0);
let typeName=useRef('');
function enter(id1){
setId(id1)
setFlag(1)
}
function exsit(){
    setFlag(0)
}
function addTypeTask(){
    dispatch(addType(typeName))
    alert("הסוג התווסף בהצלחה")
    // setFlag(0)
}

return(
    <>
    {flag===1&&<ShowTasks id={id} exsit={exsit}/>}
    {flag===0&&<>
    <h1>מנהל:</h1>
    <ul>   
    {
      contactList.map(element => (    
      <li>שם:{element.name} ת.ז:{element.id} <br></br> <Button variant="outlined" onClick={()=>enter(element.id)}> כניסה</Button></li>
  ))}

  </ul>
    <Button variant="outlined" onClick={()=>setFlag(3)} >להוספת סוג משימה</Button>
  </>}
    {flag===3&&<>
    <TextField inputRef={typeName}  id="outlined-basic" label="הכנס שם סוג המשימה" variant="outlined"/>
    <Button variant="outlined" onClick={addTypeTask}>אישור</Button>
    </>}
    </>
)
})