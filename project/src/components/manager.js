import { connect } from "react-redux";
import React, { useRef, useState ,useEffect} from "react";
import ShowTask from "./showTask";
import ShowTasks from "./showTasks";
import { addType,getTaskTypeList } from "../redux/action";
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";
import { useNavigate } from 'react-router-dom';


function mapStateToProps(state) {
  return {
    contactList: state.users.contactList,
    taskList: state.tasks.taskList,
    typeList: state.tasks.typeList
  }
}
export default connect(mapStateToProps)(function Manager(props) {
  const { contactList, taskList, typeList, dispatch } = props;
  const [id, setId] = useState(0);
  const newNavigate = useNavigate()
  const [flag, setFlag] = useState(0);
  let taskTypeId = useRef(0);
  let typeName = useRef('');
  function enter(id1) {
    setId(id1)
    // setFlag(1)
    debugger
    return newNavigate('/showTasks', { state: { id: id1 } })
  }
  function exsit() {
    setFlag(0)
  }
  const addTypeTask = async () => {
    const x = typeList.find(x => x.taskTypeId == taskTypeId.current.value)
    const y = typeList.find(x => x.taskTypeName == typeName.current.value)
    if (x != undefined || y != undefined) {
      alert(' קיים מספר/שם משימה זהה החלף את המתונים שהכנסת  ')
    }
    else {
    try {
        const response = await axios.post('http://localhost:5000/tasks/taskType', { taskTypeId: taskTypeId.current.value, taskTypeName: typeName.current.value })
        if (response.status == 200) {
          dispatch(addType(typeName))
          alert("הסוג התווסף בהצלחה")
        }
      }
    
      catch (error) {
        console.error(error)
      }
      // setFlag(0)
    }
  }
  
  const getAll = async () => {
    try {
      const responseType = await axios.get('http://localhost:5000/tasks/taskType/')
      if (responseType.status == 200) {
        dispatch(getTaskTypeList(responseType.data))
      }
    }
    catch (error) {
      console.error(error)
    }
  }
//בעת עלית הקומפוננטה נבצע קריאה לעידכון ה store
  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      {/* {flag === 1 && <ShowTasks id={id} exsit={exsit} />} */}
      {flag === 0 && <>
        <h1>מנהל:</h1>
        <ul id="ul">
          {
            contactList.map(element => (
              <div>שם:{element.name}<br /> ת.ז:{element.id} <br /><Button variant="outlined" onClick={() => enter(element.id)}> כניסה</Button></div>
            ))}
        </ul>
        <Button variant="outlined" onClick={() => setFlag(3)} >להוספת סוג משימה</Button><br /><br/>
      </>}
      {flag === 3 && <><br /><br />
        <TextField inputRef={typeName} id="outlined-basic" label="הכנס שם סוג המשימה" variant="outlined" /><br /><br />
        <TextField inputRef={taskTypeId} id="outlined-basic" label="  הכנס מספר משימה " variant="outlined" /><br /><br />

        <Button variant="outlined" onClick={addTypeTask}>אישור</Button>
      </>}
    </>
  )
})