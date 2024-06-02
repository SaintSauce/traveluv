import React from 'react';
import Modal from '@mui/material/Modal';

const Modal4 = React.forwardRef((props, ref) => {
  return (
    <Modal ref={ref} {...props}>
      {props.children}
    </Modal>
  );
});

export default Modal4;