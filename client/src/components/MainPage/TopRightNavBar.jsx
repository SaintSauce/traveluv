import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import ProfileMenu from './ProfileMenu'

const TopRightNavBar = () => {

  let navigate = useNavigate();

  function handleClickCreate() {
    navigate('/create');
  }

  function handleClickDiscover() {
    navigate('/discover');
  }

  return (
    <div className="mt-5 ml-6">
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClickCreate}>Create</Button>
            <Button variant="outlined" onClick={handleClickDiscover}>Discover</Button>
            <ProfileMenu />
        </Stack>
    </div>
  )
}

export default TopRightNavBar
