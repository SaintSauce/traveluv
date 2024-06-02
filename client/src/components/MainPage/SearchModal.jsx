import React from 'react'

import { Box, Typography, TextField } from '@mui/material'
import SearchList from './SearchList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '1px solid #808080',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const SearchModal = () => {
  return (
    <div>
      <Box sx={style}>
        <TextField id="filled-basic" label="Search" variant="standard" className="w-full" />
        <SearchList />
      </Box>
    </div>
  )
}

export default SearchModal