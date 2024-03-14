import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful!');
      navigate("/products");
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className='login-container'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" className='login-heading'>
          LOGIN
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email ID"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            helperText={password.length !== 8 && password.length > 0 ? "Your Password length should be 8." : " "}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
            className='login-btn'
          >
            Log In
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Don't have an account? "}
            <Link href="#" variant="body2" onClick={() => navigate('/signup')} className='login'>
              {"SIGN UP here...!"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;

