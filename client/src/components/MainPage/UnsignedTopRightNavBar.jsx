import React from 'react'

import { Button, Stack } from '@mui/material';

const UnsignedTopRightNavBar = () => {
    return (
        <div className="mt-7 ml-6">
            <Stack spacing={2} direction="row">
                <Button variant="outlined">Explore</Button>
                <Button variant="outlined">Sign Up</Button>
                <Button variant="outlined">Log In</Button>
            </Stack>
        </div>
    )
}

export default UnsignedTopRightNavBar