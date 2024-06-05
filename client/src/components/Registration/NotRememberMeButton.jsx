import React from 'react';
import { Button } from '@mui/material';

const NotRememberButton = ({ rememberMe, setRememberMe }) => {
    return (
        <Button
            variant="outlined"
            onClick={() => setRememberMe(!rememberMe)}
        >
            Will not forget you!
        </Button>
    );
};

export default NotRememberButton;