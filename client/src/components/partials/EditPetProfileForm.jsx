import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function EditPetProfileForm(props) {

  return (
    <Fragment>
      <Button 
        className='yuki-font-color2'
        onClick={props.handleClickOpen}
        variant="text">
          Edit Profile
      </Button>
      <Dialog open={props.open} onClose={props.handleCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Edit your details
          </Typography>
        </DialogTitle>
          <DialogContent style={{ maxWidth: '500px' }}>
            <TextField
              onChange={props.updateFormData}
              value={props.ownerName}
              autocomplete="off"
              autoFocus
              name="ownerName"
              id="name outline-basic"
              label="Full Name"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.username}
              autocomplete="off"
              autoFocus
              name="username"
              id="name outline-basic"
              label="Username"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.contactNumber}
              autocomplete="off"
              autoFocus
              name="contactNumber"
              id="name outline-basic"
              label="Contact Number"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.email}
              autocomplete="off"
              autoFocus
              name="email"
              id="name outline-basic"
              label="Email"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleCancel}>Cancel</Button>
          <Button className='button-link' onClick={props.handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}