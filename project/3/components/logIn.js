// import React, { useRef,useState } from "react";
// import { connect } from "react-redux";
// import LogUp from "./logUp";
// import ShowTasks from "./showTasks"
// import { deleteUser } from "../redux/action";
// import Manager from "./manager";
// import { createSvgIcon } from '@mui/material/utils';

// // import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { red } from '@mui/material/colors';
// import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import { display } from "@mui/system";

// import { useNavigate } from 'react-router-dom';

// function mapStateToProps(state){
//    return {contactList:state.users.contactList,
//             taskList:state.tasks.taskList
// }
// }
// export default connect(mapStateToProps)(function LogIn(props){

//     const newNavigate=useNavigate()
//     const{dispatch,contactList,taskList}=props;
//     let id=useRef('');
//     let name=useRef('');
//     function remove(){
//      dispatch(deleteUser(id.current.value));
//     }
//     function enter(){
//     console.log(id.value);

//     const tempUser=contactList.find(x=>x.id===id.current.value);

//     if(tempUser!=null)
//     {
       
//         if(tempUser.manager===1){
//             newNavigate("/manager" )
//         //   return <Navigate to="/manager"/>
//         }
//         else{
//         alert(`שלום ${name.current.value}`)
//         debugger
//         return newNavigate('/showTasks',{state:{id:id.current.value}})
//     }  
//     }
//     else{
//         return newNavigate("/logup")
//     }
  
//    }
//    function exsit()
//    {
//     // setShowComponent(0)
//    }
//    function addTypeTask(){

//    }
   
//     return(
//         <>
   
//        {/* { ShowComponent==0&&< > */}

        
//         <Stack spacing={3}  alignItems="center" ><br/><br/><br/><br/>
//         <TextField  inputRef={name}  id="outlined-basic" label="שם" variant="outlined" />
//         <TextField   inputRef={id} id="outlined-basic" label="ת.ז" variant="outlined" />

//         <Stack direction="row" spacing={3.5}>
//         <Button onClick={enter} variant="outlined"  >לכניסה</Button>
//         <Button onClick={remove} variant="outlined">להסרה</Button></Stack></Stack>

        
//         {/* </>} */}
//         {/* { ShowComponent==1&&<LogUp setShowComponent={setShowComponent}/>} */}
//         {/* {ShowComponent==2&&<ShowTasks  exsit={exsit} />}
//         {ShowComponent==3&&<Manager/>} */}
//         </>
//     )
// })


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { useRef,useState } from "react";
import { connect } from "react-redux";
import LogUp from "./logUp";
import ShowTasks from "./showTasks"
import { deleteUser } from "../redux/action";
import Manager from "./manager";
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
function mapStateToProps(state){
    return {contactList:state.users.contactList,
             taskList:state.tasks.taskList
 }
 }

export default connect(mapStateToProps) (function SignIn(props) {

    const newNavigate=useNavigate()
    const{dispatch,contactList,taskList}=props;
    let id=useRef('');
    let name=useRef('');
    function remove(){
     dispatch(deleteUser(id.current.value));
    }
  const handleSubmit = (event) => {
    const tempUser=contactList.find(x=>x.id===id.current.value);

    if(tempUser!=null)
    {
       
        if(tempUser.manager===1){
            newNavigate("/manager" )
        //   return <Navigate to="/manager"/>
        }
        else{
        alert(`שלום ${name.current.value}`)
        // debugger
        return newNavigate('/showTasks',{state:{id:id.current.value}})
    }  
    }
    else{
        return newNavigate("/logup")
    }
  
   }
  

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="שם"
              type="name"
              id="name"
              autoComplete="name"
              inputRef={name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ת.ז"
              name="id"
              autoComplete="id"
              autoFocus
              inputRef={id}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              להתחברות
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  
                </Link>
              </Grid>
              <Grid item>
                <Link href="/logup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
})
