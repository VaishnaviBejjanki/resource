// import React, { Component, useState } from 'react';
// import Alert from '@material-ui/lab/Alert';
// import IconButton from '@material-ui/core/IconButton';
// import Collapse from '@material-ui/core/Collapse';
// import CloseIcon from '@material-ui/icons/Close';


// export default function TransitionAlerts() {
//   const [open, setOpen] = React.useState(true);

//   return (
//     <div>
//       <Collapse  in={open} >
//         <Alert severity="error" 
        
//           action={ 
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setOpen(false);
//               }}
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//         >
//           Resource Already Exists!!
//         </Alert>
//       </Collapse>
//     </div>
//   );
// }

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Success() {
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Resource Added</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Resource has been successfully added!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}