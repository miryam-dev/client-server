import React ,{useEffect,useState}from 'react'
import { connect } from "react-redux";
import ShowTask from "./showTask"
import AddTask from './addTask';
import {useLocation} from 'react-router-dom'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";
import {useNavigate} from 'react-router-dom';
import {getTaskList, getTaskTypeList} from "../redux/action"
import axios from 'axios'

function mapStateToProps(state){
  console.log();
    return {taskList:state.tasks.taskList
    ,typeList:state.tasks.typeList}
}
export default connect(mapStateToProps) (function ShowTasks(props){
    const newNavigate=useNavigate()
const location=useLocation();
const id=location.state&&location.state.id;
console.log("id",id);
const{taskList,typeList,exsit,dispatch}=props;
console.log(taskList);
const [taskToShow,setTaskToShow]=useState('');
const [show,setShow]=useState(0);
console.log("sho",show)
// useEffect(function(){
// },[])
function goToShowTask(element){
  console.log(element,"elemnt");
    setTaskToShow(element)
    setShow(1);

}
const getAllTasks=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/tasks/')
      const responseType=await axios.get('http://localhost:5000/tasks/taskType')

      console.log("respon",response.data);
      if(response.status==200&&responseType.status==200)
      {
        // console.log("u",response.data);
        console.log('taskList1',taskList);
        dispatch(getTaskList(response.data))
        dispatch(getTaskTypeList(responseType.data))

        console.log('taskList2',taskList);
        console.log("typeList2",typeList);
      }
    }
      catch(error){
        console.error(error)
      }
}
useEffect(()=>{

    getAllTasks()

},[])
return(<>
{show===1&&<ShowTask task={taskToShow} typeList={typeList} setShow={setShow}/>}
{show===0&& <><br></br>
    <Button variant="outlined" onClick={()=> setShow(2) }>להוספת משימה<LibraryAddIcon/></Button>
<div>
<ul>
    <b/><br/>
  {
    taskList.map(element => (

      element.contactId==id&&<><li>{element.taskName}
      </li>
      <Button variant="outlined" onClick={()=>goToShowTask(element)}>להצגת המשימה</Button>
      </>
))}

</ul>
</div>

{/* <Button variant="outlined" onClick={exsit}>יציאה</Button> */}
</>
}

{show===2&&<AddTask setShow={setShow}/>}
</>)

})