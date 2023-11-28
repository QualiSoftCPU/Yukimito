import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

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
  },
  {
    title: 'Vaccine Card',
    label: 'Vaccine Card'
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
        <DialogTitle>Pet Details</DialogTitle>
        {dialogueNames.map((result) => {
          return (
            <DialogContent className='form-input'>
              <TextField
                autoFocus
                name={result.title}
                id="name outline-basic"
                label={result.label}
                type="text"
                variant="outlined"
                onChange={props.handleChange}
              />
            </DialogContent>
          )
        })}
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}