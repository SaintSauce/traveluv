import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import RememberButton from './RememberMeButton';
import NotRememberButton from './NotRememberMeButton';

// API Handling
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const navigate = useNavigate();

    useEffect(() => {
        const savedUsername = localStorage.getItem('isAuthenticated') === 'true'
            ? localStorage.getItem('username')
            : '';
        setUsername(savedUsername);
        setRememberMe(localStorage.getItem('rememberMe') === 'true');
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate])

    const handleLogin = (e) => {
        e.preventDefault();

        // save credentials
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('rememberMe', rememberMe);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('rememberMe');
        }

        dispatch(login(username, password));
    }

    return (
        <div className="flex rounded-md items-center bg-white w-1/4 h-4/6">
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
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
                                required
                                label="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {
                                rememberMe ? 
                                <RememberButton rememberMe={rememberMe} setRememberMe={setRememberMe} /> : 
                                <NotRememberButton rememberMe={rememberMe} setRememberMe={setRememberMe} />
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                {loading ? 'Logging in...' : 'Login'}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <h1>Register</h1>
                        </Grid>
                    </Grid>
                    {error && <p>{error}</p>}
                </form>
            </Container>
        </div>
    );
}

export default LoginForm;