import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removTask, updateTask } from "../redux/action";
import PrevNext from "./prevnext";
import Typography from '@mui/material/Typography';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import ButtonBase from '@mui/material/ButtonBase';
import { display } from "@mui/system";
import axios from 'axios'

export default connect()(function ShowTask(props){
    const{task,typeList,dispatch,setShow}=props;
    console.log("task",task);
    const[done,setDone]=useState(task.done);
  console.log("hh",task.done);

    const remove=async()=>{
      
      try{
        const response=await axios.delete(`http://localhost:5000/tasks/${task.taskId}`)
        dispatch(removTask(task.taskId));
      setShow(0)
      }
      catch(error){
        console.error(error);
      }
    }
    const update=async()=>{
      try{
        console.log(task.taskId,"task.taskId");
        const response=await axios.put(`http://localhost:5000/tasks/${task.taskId}`,{
          taskId:task.taskId,
          done:true
        })
        console.log("respon",response.data);
          dispatch(updateTask(task.taskId))
          setDone(true);
      }
        catch(error){
          console.error(error)
        }
    }
    useEffect(()=>{
      console.log(typeList,"type");
    })
    return(<>


<Paper
      sx={{
        p: 2,
        margin: '3%',
        marginLeft:'38%',
        maxWidth: 300,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">שם המשימה
              {task.taskName}
              </Typography>
              <Typography variant="body2" gutterBottom>מבצע המשימה
              {task.contactName}
              </Typography>
              <Typography variant="subtitle1" component="div">סוג המשימה
            {typeList.find(x=>x.taskTypeId===task.taskTypeId).taskTypeName}
            </Typography>
              <Typography variant="body2" color="text.secondary">האם המשימה נעשתה?
                {String(done)}
              </Typography>
            </Grid>
            <Grid item>
               <Stack direction="row" spacing={2} sx={{paddingLeft:'14%',}} >
                <Button onClick={remove} color="inherit" variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button onClick={update} color="inherit" variant="contained" endIcon={<BorderColorIcon />}>
                    Edit
                </Button>
                <Button variant="outlined"  onClick={()=>setShow(0)}> Back</Button>
            </Stack>
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
        </>
    )
})


