import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate,useLocation} from 'react-router-dom'
function mapStateToProps(state){
    return {contactList:state.users.contactList, 
            typeList:state.tasks.typeList ,   
            taskList:state.tasks.taskList
 }
 }
export default connect(mapStateToProps) (function AddTask(props)
{
    const{dispatch,contactList,typeList,taskList,setShow}=props;
    const location=useLocation();
    let nameTask=useRef('');
    // let taskTypeId=useRef('');
    let contactId=useRef('');
    let contactName=useRef('');
    const newNavigate=useNavigate()
    function add(){
      debugger
    let temp =contactList.find(x=>x.id===contactId?.current?.value)
    if(temp==null)
    alert('שמך לא נמצא במאגר');
    else{
      debugger
      dispatch(addTask( {taskTypeId:2,taskName:nameTask,contactId:contactId.current.value,contactName:contactName.current.value}))
      alert("המשימה נוספה בהצלחה")
      debugger;
      // console.log("tasks:",taskList);
      setShow(0)
      //  newNavigate("/showTasks",{state:{id:id}})
    }
    }
   
    const [taskTypeId, settaskTypeId] = React.useState('');

    const handleChange = (event) => {
        settaskTypeId(event.target.value);
    };

    return(
        <>

<Stack spacing={3}  alignItems="center" ><br/><br/><br/><br/>
        <TextField  ref={nameTask} id="outlined-basic" label="שם המשימה" variant="outlined" />


        <Box sx={{ minWidth: 500 }}>
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-autowidth-label">שם המשימה</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={taskTypeId}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
          {typeList.map(e=>(<MenuItem value={e.taskTypeName}>{e.taskTypeName}</MenuItem> ))}

          </Select>
        </FormControl>
    </Box>

        <TextField  inputRef={contactId} id="outlined-basic" label="ת.ז המבצע" variant="outlined" />
        <TextField  inputRef={contactName} id="outlined-basic" label="שם המבצע" variant="outlined" />



        <Stack direction="row" spacing={3.5}>
        <Button onClick={add} variant="outlined"  >להוספת המשימה</Button>
        <Button onClick={()=>setShow(0)} variant="outlined">חזרה</Button></Stack></Stack> 

       

        </>
    )
        })