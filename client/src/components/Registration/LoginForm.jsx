import React from 'react';
import { Box, Paper, TextField, Checkbox, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import HeadLogo from '../MainPage/HeadLogo';

const LoginForm = () => {
  const { signIn } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80vw',
        height: '80vh',
      }}
    >
      <Paper elevation={3} className="w-1/3 p-8 flex flex-col justify-between">
        <div className="flex justify-center">
          <HeadLogo />
        </div>
        <TextField id="outlined-basic" label="Username" variant="outlined" className="w-full" />
        <TextField id="outlined-basic" label="Password" variant="outlined" className="w-full" />
        <div className="flex items-center justify-between">
          <Checkbox />
          <h1>Forgot your password?</h1>
        </div>
        <Button className="w-full" variant="contained" onClick={signIn}>Login</Button>
        <h1 className="mt-2 text-center">Don't have an account? Sign Up</h1>
      </Paper>
    </Box>
  );
};

export default LoginForm