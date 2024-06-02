import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'

const TopRightNavBar = () => {

  let navigate = useNavigate();

  function handleClickCreate() {
    navigate('/create');
  }

  function handleClickDiscover() {
    navigate('/discover');
  }

  function handleClickProfile() {
    navigate('/profile');
  }

  return (
    <div className="mt-5 ml-6">
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClickCreate}>Create</Button>
            <Button variant="outlined" onClick={handleClickDiscover}>Discover</Button>
            <Button variant="outlined" onClick={handleClickProfile}>Profile</Button>
        </Stack>
    </div>
  )
}

export default TopRightNavBar
