import {produce} from 'immer'
const initialState={
    contactList:[{name:"moshe choen",id:"1234",manager:1,emailAdress:"ms@gmail.com",phone:"0527645454"},
                 {name:"chaim chen",id:"2345",manager:0,emailAdress:"rs@gmail.com",phone:"054867564"}],
    contactsCount:2

}

export default produce((state,action)=>
{
  switch(action.type){
    case 'ADD_USER':
    {state.contactList.push(action.payLoad)}
    break;
    case 'DELETE_USER':
        {const index=state.contactList.findIndex(x=>x.id==action.payLoad);
          if(index!==-1)
          {
            state.contactList.splice(index,1)
            alert("שמך הוסר בהצלחה")
          }
          else
          alert("שמך לא נמצא במערכת")
        }
    break;
    case 'UPDATE_NAME':
        {state.contactList.find(x=>x.id==action.payLoad.id).name=action.payLoad.name}
    break;
    case 'UPDATE_COUNT':
    {state.contactsCount=action.payLoad}
  }
},initialState)
