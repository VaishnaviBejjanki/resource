
import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// class Errors extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       setOpen:true,
//       open:true
//     }

//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleClose = () => {
//     this.setState({
//       setOpen:false
//     })
    
//   }

// render(){
// const open = this.state;

export default function Failure() {
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Unable to add Resource</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Resource already exists.<br/>Please check again.
          
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