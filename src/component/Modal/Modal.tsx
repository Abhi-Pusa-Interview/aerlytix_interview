import React,{ReactNode} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
    open:boolean,
    handleOpen: Function,
    handleClose: Function,
    children: ReactNode
}

export default function BasicModal(props:BasicModalProps) {

  return (
      <Modal
        data-testid="modal"
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {props.children}
        </Box>
      </Modal>
  );
}