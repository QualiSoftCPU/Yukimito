import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFile from './UploadFile';
import { useState } from 'react';
import { Typography } from '@mui/material';

const dialogueNames = [
  {
    title: 'Pet Name',
    label: 'Pet Name'
  }, 
  {
    title: 'Breed',
    label: 'Breed'
  }, 
  {
    title: 'Birthday',
    label: 'Birthday'
  },
  {
    title: 'Size',
    label: 'Size'
  }
];

export default function EditItemForm(props) {

  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function handleAdd (event) {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button 
        onClick={handleClickOpen}
        className='button-color' 
        variant="contained"
        style={{marginRight: '10px'}}>
          Add A Pet
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Officially add your pet to the family!
          </Typography>
        </DialogTitle>
          <DialogContent style={{ maxWidth: '500px' }}>
            {dialogueNames.map((result) => {
              return (
                  <TextField
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
            <UploadFile />
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={handleCancel}>Cancel</Button>
          <Button className='button-link' onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}