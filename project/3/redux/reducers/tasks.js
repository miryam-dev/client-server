import { act } from '@testing-library/react';
import {produce} from 'immer';

const initialState={
typeList:[{taskTypeId:1,taskTypeName:"משימה"}
           ,{taskTypeId:2,taskTypeName:"dibag"}],
taskList:[]
// [{taskId:1,taskTypeId:1,taskName:"דוח תלמידים",contactId:"1234",contactName:"moshe choen",done:false,img:['../img/1.png','../img/2.png']},
//           {taskId:2,taskTypeId:2,taskName:"לא עודכן מלאי ",contactId:"2345",contactName:"chaim chen",done:false,img:['',' ']},
//           {taskId:3,taskTypeId:2,taskName:" טיפול בשגיאה",contactId:"2345",contactName:"chaim chen",done:false,img:['',' ']},
//           {taskId:4,taskTypeId:1,taskName:"חישוב סל ",contactId:"1234",contactName:"moshe chen",done:false,img:['',' ']},
//           {taskId:5,taskTypeId:2,taskName:" חוסר תאום ",contactId:"2345",contactName:"chaim chen",done:false,img:['',' ']},
//           {taskId:6,taskTypeId:1,taskName:"אימות נתונים   ",contactId:"2345",contactName:"chaim chen",done:false,img:['',' ']},
//           {taskId:7,taskTypeId:1,taskName:" קריאה מקובץ json",contactId:"1234",contactName:"moshe chen",done:false,img:['',' ']}
//         ]         
}

export default produce((state,action)=>{
switch(action.type){
    case 'ADD_TASK':
        {
            const {taskTypeId,taskName,contactId,contactName}=action.payLoad;
            state.taskList.push({taskId:initialState.taskList.length+1,taskTypeId:taskTypeId,taskName:taskName,contactId:contactId,contactName:contactName,done:false})
        }
        break;
    case 'ADD_TYPE':
        {state.typeList.push({ taskTypeId:initialState.typeList.length+1,taskTypeName:action.payLoad})
        
        }
        break;
    case 'REMOVE_TASK':
        {
            const index=state.taskList.find(x=>x.taskId=action.payLoad)
            state.taskList.splice(index,1)
        }
        break;
    case 'UPDATE_TASK':
    {debugger;
        console.log(state.taskList[action.payLoad-1].done);
        state.taskList[action.payLoad-1].done=true
    }
        console.log(state.taskList[action.payLoad-1].done);

    break;
    case 'GET_TASKLIST':
        {
           state.taskList=action.payLoad;
        }
}
},initialState)