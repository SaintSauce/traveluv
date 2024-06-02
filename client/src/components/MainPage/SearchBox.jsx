import React, { useState } from 'react'

import { Button, Modal } from '@mui/material'
import SearchModal from './SearchModal';
import Modal4 from './Modal4';

const SearchBox = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    return (
        <div className="relative w-full mt-5">
            <Button className="w-full" variant="outlined" onClick={handleOpen}>
                {`Search... (Ctrl + K)`}
            </Button>
            <Modal4 open={open} onClose={handleClose}>
                {/* Wrap SearchModal in a valid element */}
                <div>
                    <SearchModal />
                </div>
            </Modal4>
        </div>
    );
};

export default SearchBox