
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
import {connect} from 'react-redux'
import React, { useEffect, useRef } from 'react'
import {addUser} from '../redux/action'
import {  Redirect,Navigate,useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {addUser} from "../redux/action"
import axios from 'axios'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    </Typography>
  );
}

function mapStateToProps(state) {
    return {
        contactList: state.users.contactList,
    };
}
const defaultTheme = createTheme();

export default connect(mapStateToProps)(function SignUp(props) {

    const newNavigate=useNavigate()
    const{dispatch,contactList}=props;
    const name=useRef('');
    const id=useRef(0);
    const email=useRef('');
    const phone=useRef('');
    // const manager=useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    insertUser();
    const data = new FormData(event.currentTarget);
    // dispatch(addUser({name:name.current.value,id:id.current.value,phone:phone.current.value,emailAdress:email.current.value}));
    alert(`שלום ל ${name.current.value}`)
    return newNavigate('/login')
    
  };


  const insertUser=(async()=>{
    try{

      console.log("name",name.current.value);
      const response=await axios.post('http://localhost:5000/users/' ,{
      name:name.current.value,
      id:id.current.value,
      manager:0,
      emailAdress:email.current.value,
      phone:phone.current.value
    });
      console.log("respon",response.data);
      if(response.status==200)
      {
        console.log('con1',contactList);
        dispatch(addUser({ name:name.current.value,
          id:id.current.value,
          manager:0,
          emailAdress:email.current.value,
          phone:phone.current.value}))

        // console.log('con2',contactList);
      }
    }
      catch(error){
        console.error(error)
      }
})
// useEffect(()=>{
 
// },[]) 


  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  inputRef={name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="Id"
                  name="id"
                  autoComplete="family-name"
                  inputRef={id}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="new-password"
                  inputRef={phone}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
   

            >
              להרשמה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
})