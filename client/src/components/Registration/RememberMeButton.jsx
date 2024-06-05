import React from 'react';
import { Button } from '@mui/material';

const RememberButton = ({ rememberMe, setRememberMe }) => {
    return (
        <Button
            variant="contained"
            onClick={() => setRememberMe(!rememberMe)}
        >
            Remember Me ?
        </Button>
    );
};

export default RememberButton;