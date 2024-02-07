import {connect} from 'react-redux'
import React, { useEffect, useRef } from 'react'
import {addUser} from '../redux/action'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import PhoneIcon from '@mui/icons-material/Phone';
import { display } from "@mui/system";
import { Link, Redirect,Navigate,useNavigate } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        contactList: state.users.contactList,
    };
}
export default connect(mapStateToProps)(function LogUp(props)
{
    const newNavigate=useNavigate()
    const{dispatch,contactList}=props;
    let name=useRef('');
    let id=useRef('');
    let email=useRef('');
    let phone=useRef('');
    function join(){
        dispatch(addUser({name:name.current.value,id:id.current.value,phone:phone.current.value,emailAdress:email.current.value}));
        alert(`שלום ל ${name.current.value}`)
        debugger;
        console.log(contactList)
        return newNavigate('/showTasks',{state:{id:id.current.value}})
    }
    return(<>
    
    <Stack spacing={3}  alignItems="center" ><br/><br/><br/><br/>
        <TextField  inputRef={name} id="outlined-basic" label="שם" variant="outlined" />
        <TextField  inputRef={id} id="outlined-basic" label="ת.ז" variant="outlined" />
        <TextField  inputRef={email} id="outlined-basic" label="gmail" variant="outlined" />
        <TextField  inputRef={phone} id="outlined-basic" label="טלפון" variant="outlined" />

        <Stack direction="row" spacing={3.5}>
        <Button onClick={join} variant="outlined">לאישור</Button></Stack></Stack>
    </>)
})