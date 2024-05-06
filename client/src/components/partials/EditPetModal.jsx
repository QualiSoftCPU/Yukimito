import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import BasicDatePicker from './BasicDatePicker';

import UploadFile from './UploadFile';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function EditPetModal(props) {
  return (
    <Fragment>
      <Button
        className="yuki-font-color2"
        onClick={props.handleEditOpen}
        variant="text"
        type="button"
        class="btn btn-primary yuki-color button-border-color  mx-2"
        data-toggle="modal">
        Edit
        </Button>
        <Dialog open={props.openEdit} onClose={props.handleEditCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Edit Pet details
          </Typography>
        </DialogTitle>
          <DialogContent style={{ maxWidth: '500px' }}>
            <TextField
              onChange={props.updateFormData}
              value={props.value}
              autocomplete="off"
              autoFocus
              name=""
              id=""
              label="Pet name"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.value}
              autocomplete="off"
              autoFocus
              name=""
              id=""
              label="Breed"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
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
                <MenuItem value={'large'}>Large</MenuItem>
              </Select>
            </FormControl>
            <UploadFile />
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleEditCancel}>Cancel</Button>
          <Button className='button-link' onClick={props.handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
