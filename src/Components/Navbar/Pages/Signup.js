import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
   
    const newUser = { username,email, password };
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        if(email.length !== 0 && password.length !== 0 && username !== 0 && confirm.length !== 0 && confirm===password){
          alert("Your account is created Successfully");
          navigate('/login')
        }
        else{
          alert("Please fill the fields")
        }
        if(password !== confirm){
          alert('Password and Confirm Password do not match')
        }

  };

  return (
    <div className='sign-container'>
    <Container component="main" maxWidth="xs" className='sign-container'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" className='sign-heading'>
          SIGNUP
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Enter Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!username.length}
            helperText={!username.length ? "Please fill the Name" : " "}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email ID"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!email.length}
            helperText={!email.length ? "Please fill the Email ID" : " "}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password.length !== 8 && password.length > 0}
            helperText={password.length !== 8 && password.length > 0 ? "Your Password should contain 8 digits" : " "}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm"
            label="Confirm Password"
            type="password"
            id="confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            error={!confirm.length}
            helperText={!confirm.length ? "Please fill the Confirm Password" : " "}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignup}
            className='signup-btn'
          >
            Sign Up
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Do you have an account? "}
            <Link href="#" variant="body2" onClick={() => navigate('/login')} className='sign-btn'>
              {"LOGIN here...!"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
    </div>
  );
}

export default Signup;

