import { Provider } from 'react-redux';
import './App.css';
import LogUp from './components/logUp';
import { createSvgIcon } from '@mui/material/utils';
import store from './redux/store';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import LogIn from './components/logIn';
import ShowTask from './components/showTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowTasks from './components/showTasks';
import AddTask from './components/addTask';
import Manager from './components/manager';
import TryMe from './components/TryMe';




// import Album from './components/try';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  // const taskList=[{taskId:1,taskTypeId:1,taskName:"דוח תלמידים",contactId:"1234",contactName:"moshe choen",done:false},
  // {taskId:2,taskTypeId:2,taskName:"לא עודכן מלאי ",contactId:"2345",contactName:"chaim chen",done:false}];
  // const typeList=[{taskTypeId:1,taskTypeName:"משימה"}
  //          ,{taskTypeId:2,taskTypeName:"dibag"}]
  return (
    <>
{/* <TryMe/> */}

    <Provider store={store}>
      <div id="div">
        <div id="div2">
      <nav id="nav">
      <Stack direction="row" spacing={3.5}>
        <Button variant="outlined"  ><Link to="/logup" className="link">להרשמה</Link><AddCircleIcon/></Button>
        <Button variant="outlined"  ><Link to="/login" className="link">לכניסה</Link><AccountCircleIcon/></Button>
      </Stack>
          <br/>
        </nav>
      <Routes>
         
      {/* <Route path="/" element={<Album/>}/>  */}
      <Route path="/login" element={<LogIn/>}/> 
      <Route path="/logup" element={<LogUp/>} />
      <Route path="/manager" element={<Manager/>}/> 
      {/* <Route path="/addTask" element={<AddTask/>}/> 
      <Route path="/showTask" element={<ShowTask/> }/> */}
      <Route path="/showTasks" element={<ShowTasks/>}/> 
   
      </Routes> </div></div>
      </Provider></>
  );
}

export default App;
