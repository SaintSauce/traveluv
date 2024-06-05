import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

// Auth

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginEvent = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex rounded-md items-center bg-white h-3/4">
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleLoginEvent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}

export default SignUpForm;