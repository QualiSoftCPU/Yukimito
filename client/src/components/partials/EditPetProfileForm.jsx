import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

const dialogueNames = [
  {
    title: 'petOwnername',
    label: 'Name'
  }, 
  {
    title: 'username',
    label: 'Username'
  },
  {
    title: 'email',
    label: 'Email'
  },
  {
    title: 'contactNumber',
    label: 'Contact Number'
  }
];

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
            {dialogueNames.map((result) => {
              return (
                  <TextField
                    autocomplete="off"
                    autoFocus
                    name={result.title}
                    id="name outline-basic"
                    label={result.label}
                    type="text"
                    variant="outlined"
                    onChange={props.handleChange}
                    style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
                  />
              )
            })}
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleCancel}>Cancel</Button>
          <Button className='button-link' onClick={props.handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}