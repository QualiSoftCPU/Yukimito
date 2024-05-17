import React from 'react'
import { TextField } from '@mui/material'
import { manageAdminDetails } from './options.ts';

const ManageAdminModal = () => {

  return (
    <div
    class="modal fade"
    id="adminControlModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="adminControlModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="adminControlModalTitle">
            Admin Name
          </h5>
        </div>
        <div class="modal-body">
        <div className="modal-body">
      {manageAdminDetails.map((details, index) => {
        return (
          <React.Fragment key={index}>
            {details.type === 'text' ? (
              <TextField
                className="input-margin non-inline input-styling"
                name={details.name}
                placeholder={details.placeholder}
                type={details.type}
                id="outlined-basic"
                label={details.label}
                variant="outlined"
                required
              />
            ) : (
                <div className="dropdown">
  <select
    className="form-select non-inline input-styling text-muted rounded-3.5 bg-white py-3 border border-custom" 
    id={details.name}
    name={details.name}
    required
  >
    <option class="dropdown-item" value="" disabled selected>Change Type</option>
    {details.options.map((option, index) => (
      <option class="dropdown-item" key={index} value={option}>{option}</option>
    ))}
  </select>
</div>

              
            )}
          </React.Fragment>
        );
      })}
    </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary yuki-color button-border-color"
            data-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ManageAdminModal