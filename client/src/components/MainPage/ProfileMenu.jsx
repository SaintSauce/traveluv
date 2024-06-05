import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

// Link navigation
import { useNavigate } from 'react-router-dom'

// API Handling
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    navigate('/profile');
  };

  const handleSettings = () => {
    setAnchorEl(null);
    navigate('/settings');
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
      >
        Profile
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {setAnchorEl(null)}}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleSettings}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;