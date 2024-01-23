import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFile from './UploadFile';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import BasicDatePicker from './BasicDatePicker';

const dialogueNames = [
  {
    title: 'name',
    label: 'Pet Name'
  }, 
  {
    title: 'breed',
    label: 'Breed'
  }
];

export default function EditItemForm(props) {
  
  return (
    <Fragment>
      <button onClick={props.handleClickOpen} type="button" class="btn btn-primary yuki-color button-border-color" data-toggle="modal">
        <span className="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </span>
        Add pet
      </button>
      <Dialog open={props.open} onClose={props.handleCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Officially add your pet to the family!
          </Typography>
        </DialogTitle>
          <DialogContent style={{ maxWidth: '500px' }}>
            {dialogueNames.map((result) => {
              return (
                  <TextField
                    value={props.value}
                    required
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
            <BasicDatePicker onDateChange={props.handleDateChange} />
            <FormControl fullWidth style={{ marginBottom: '1.5rem', marginTop: '1.5rem'}}>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                style={{borderRadius: '20px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Size"
                onChange={props.handleChange}
                name='size'
              >
                <MenuItem value={'small'}>Small</MenuItem>
                <MenuItem value={'medium'}>Medium</MenuItem>
                <MenuItem value={'large'}>large</MenuItem>
              </Select>
            </FormControl>
            <UploadFile />
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleCancel}>Cancel</Button>
          <Button className='button-link' onClick={props.handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}