import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";
import { getTaskTypeList } from "../redux/action"
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
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { getUserList } from "../redux/action"

function mapStateToProps(state) {
  return {
    contactList: state.users.contactList,
    typeList: state.tasks.typeList,
    taskList: state.tasks.taskList
  }
}
export default connect(mapStateToProps)(function AddTask(props) {
  const { dispatch, contactList, typeList, taskList, setShow } = props;
  const location = useLocation();
  const nameTask = useRef('');
  const contactId = useRef('');
  // let taskTypeId=useRef('');
  const taskId = useRef('');
  const contactName = useRef('');

  const newNavigate = useNavigate()

  //להוספת משימה ב mongodb
  const addTask1 = async () => {
    // בדיקה האם קיים id
    let temp = contactList.find(x => x.id === contactId.current.value)

    //בדיקה האם קיים  id זהה ברשימת המשימות
    let task = taskList.find(x => x.taskId == taskId.current.value)
    console.log(task);
    if (task != undefined)
      {
        alert('קיים מספר משימה זהה ,הכנס מספר אחר')
        setShow(0)
      }
    else {
      if (temp == undefined)
        alert('שמך לא נמצא במאגר');
      else {
        try {
          const x=typeList.find(x=>x.taskTypeName===taskTypeName).taskTypeId;
          
          const newTask={ taskName: nameTask.current.value, taskId: taskId.current.value, taskTypeId: x, contactId: contactId.current.value, contactName: contactName.current.value, done: false }
          const response = await axios.post('http://localhost:5000/tasks/', newTask);
          // console.log("respon", response.data);
          if (response.status == 200) {
            dispatch(addTask(newTask))
            alert("המשימה נוספה בהצלחה")
            //חוזר ל showtask
            setShow(0)
          }
        }
        catch (error) {
          console.error(error)
          setShow(0)
        }
      }
    }
  }

  const [taskTypeId, settaskTypeId] = React.useState("");
  const [taskTypeName, settaskTypeName] = React.useState("");

  // const [taskTypeId, settaskTypeId] = React.useState("");

  //לעידכון ה store
  const getAllUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/')
      const responseType = await axios.get('http://localhost:5000/tasks/taskType/')
      console.log(response.data);
      console.log('responseType', responseType);
      if (response.status == 200 && responseType.status == 200) {
        console.log(response.data);

        dispatch(getUserList(response.data))
        dispatch(getTaskTypeList(responseType.data))

      }
    }
    catch (error) {
      console.error(error)
    }
  }
//בעת עלית הקומפוננטה נבצע קריאה לעידכון ה store
  useEffect(() => {
    getAllUser()
    console.log("typelist", typeList);

  }, [])
  const handleChange = (event) => {
    settaskTypeName(event.target.value);
  };

  return (
    <>

      <Stack spacing={3} alignItems="center" ><br /><br /><br /><br />
        <TextField inputRef={nameTask} id="outlined-basic" label="שם המשימה" variant="outlined" />


        <Box sx={{ minWidth: 500 }}>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-autowidth-label">סוג המשימה</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={taskTypeName}
              onChange={handleChange}

              autoWidth
              label="Age"
            >
              {typeList.map(e => (<MenuItem value={e.taskTypeName}>{e.taskTypeName}</MenuItem>))}

            </Select>
          </FormControl>
        </Box>

        <TextField inputRef={contactId} id="outlined-basic" label="ת.ז המבצע" variant="outlined" />
        <TextField inputRef={contactName} id="outlined-basic" label="שם המבצע" variant="outlined" />
        <TextField inputRef={taskId} id="outlined-basic" label="ת.ז המשימה" variant="outlined" />
        <Stack direction="row" spacing={3.5}>
          <Button onClick={()=>addTask1()} variant="outlined"  >להוספת המשימה</Button>
          <Button onClick={() => setShow(0)} variant="outlined">חזרה</Button></Stack></Stack>
    </>
  )
})