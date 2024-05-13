import React from 'react'
// import { TextField } from '@mui/material'

const ManageAdminModal = () => {


    // const manageAdminDetails = [
    //     {
    //       name: 'Name',
    //       label: "Name",
    //       placeholder: "Name",
    //       type: "text"
    //     }, 
    //     {
    //       name: 'Type',
    //       label: "Type",
    //       placeholder: "Type",
    //       type: "dropdown", 
    //       options: [ 
    //         { label: "Super Admin", value: "option1" },
    //         { label: "Admin", value: "option2" }]
    //     }
    //   ];

  return (
    <div
    class="modal fade"
    id="adminControlModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="adminControlModalTitle"
    aria-hidden="true"
  >
    {/* <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="adminControlModalTitle">
            Admin Name
          </h5>
        </div>
        <div class="modal-body">
          {manageAdminDetails.map((details, index) => {
            return (
              <TextField
                key={index}
                className="input-margin non-inline input-styling"
                //   onChange={handleInput}
                name={details.name}
                placeholder={details.placeholder}
                type={details.type}
                id="outlined-basic"
                label={details.label}
                variant="outlined"
                // onKeyPress={handleKeyPress}
                required
              />
            );
          })}
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
          >
            Save changes
          </button>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default ManageAdminModal