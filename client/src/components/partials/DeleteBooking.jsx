import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export function DeleteBooking(props) {
  const token = localStorage.getItem("token");
  let userSelected = jwtDecode(token)
    const [open, setOpen] = React.useState(false);
    const [petOwnerDetails, setPetOwnerDetails] = useState({
      ownerName: String,
      username: String,
      address: String,
      contactNumber: Number,
      email: String,
    });
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      
      setOpen(false);
    };

    const handleDeleteBooking = async (bookingId) => {
      const ownerId = userSelected.id;
      console.log(bookingId);
  
      try {
        const response = await axios.delete(
          `http://localhost/api/cancelBooking/${ownerId}/${bookingId}`,
          petOwnerDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          console.log("Successfully deleted a booking!");
          window.location.reload();
        } else {
          console.log("Deletion failed!");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Delete Booking</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 600 }} className="card my-2 shadow overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
            <h2 id="child-modal-title">Delete Booking?</h2>
            <p id="child-modal-description">
              Are you sure to delete this booking?
            </p>
            <div class= "modal-footer">
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDeleteBooking}>Confirm</Button>
            </div>
            
          </Box>
        </Modal>
      </React.Fragment>
    );
  }