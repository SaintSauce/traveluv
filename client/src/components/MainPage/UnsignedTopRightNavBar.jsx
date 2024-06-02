import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material';

const UnsignedTopRightNavBar = () => {

    let navigate = useNavigate();

    function handleClickDiscover() {
        navigate('/discover');
    }

    function handleClickRegister() {
        navigate('/register');
    }

    function handleClickLogin() {
        navigate('/login');
    }

    return (
        <div className="mt-5 ml-6">
            <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={handleClickDiscover}>Discover</Button>
                <Button variant="outlined" onClick={handleClickRegister}>Register</Button>
                <Button variant="outlined" onClick={handleClickLogin}>Login</Button>
            </Stack>
        </div>
    )
}

export default UnsignedTopRightNavBar