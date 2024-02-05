import { React, useEffect, useState} from "react";
import NavBarMain from "../partials/NavBarMain";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Autocomplete } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Footer from "../partials/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { jwtDecode } from "jwt-decode";

const PetOwnerBookingHomeCare = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  let userSelected = jwtDecode(token);

  const [ pets, setPets ] = useState([]);

  const petList = pets.map(pet => pet.name)

  const navItems = [
   
  ];

  const { service } = useParams();
  console.log(service);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }

    fetch(`http://localhost:4269/api/getPets/pet/${userSelected.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))  
      .catch((error) => console.log(error));
    

  }, [navigate, userSelected.id]);

  const showDetails = (event) => {
    console.log(event.target)
  };


  return (
    <>
      <NavBarMain navItems={navItems} customLink={
        <li class="nav-item active px-3 align-middle yuki-font-color">
          <a class="nav-link text-white" href="/PetOwnerBooking"><KeyboardReturnIcon className="me-1"/>Back to Services</a>
        </li>
      } />

      <div class="container px-1 my-5 pt-5  px-5">

        <h1 class="display-5 fw-bold">
          Booking <span className="yuki-font-color">Confirmation</span>
        </h1>
        <p class="lead mb-4">
          Thank you for choosing our {service} service! Please select your check-in and check-out date.
        </p>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 card shadow">
            <div >
              {
                <div className="container p-5" style={{ flex: 1 }}>
                  <form
                    action="/action_page.php"
                    className="form-container center"
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        onChange={showDetails}
                        label="Check In"
                        name="startDateTime"
                        className="input-margin non-inline input-styling"
                      />
                    </LocalizationProvider>

                  </form>

                  <form
                    action="/action_page.php"
                    className="form-container center"
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label="Check Out"
                        name="startDateTime"
                        className="input-margin non-inline input-styling"
                      />
                    </LocalizationProvider>
                  </form>

                  <Autocomplete
                    multiple
                    options={petList}
                    getOptionLabel={(option) => option}
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select Pets"
                        placeholder="Select Pets"
                      />
                    )}
                  />

                  <br />
                  <h5 className="text-center">Availability</h5>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar className="card" />
                  </LocalizationProvider>
                </div>
              }
            </div>
          </div>

          <div class="col-md-6 pt-1">
          
            <div className="d-flex align-items-stretch">
              <div className="content p-5">
                <h1 class="lead">
                  <span>{service} Service Details:</span>
                </h1>

                <hr />

                <p class="">
                  <p>Check In: 12 noon - 4:30 PM only</p>
                  <p>Check Out: 11:00 AM</p>

                  <p>Fee of ₱50/hr for early check in or late check out</p>
                  <p>
                    Please inform our staff if your pets has any allergies or
                    specific needs.
                  </p>
                  <p>Rates depends on Pet size</p>
                </p>

                <h5>
                  Starting at:{" "}
                  <span className="yuki-font-color">₱425/1380mins</span>
                </h5>

                <hr />
                
                <a
                  type="button"
                  class="btn btn-primary button-color"
                  data-toggle="modal"
                  data-target="#HomeCareBookNow"
                  href="/"
                >
                  Confirm Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <div
        class="modal fade"
        id="HomeCareBookNow"
        tabindex="-1"
        role="dialog"
        aria-labelledby="HomeCareBookNowCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="HomeCareBookNowLongTitle">
                Booking Confirmation
              </h5>
            </div>
            <div class="modal-body">
            Confirm Booking for {service} Service?
            </div>
            <div class="modal-footer">
              <a type="button" class="btn btn-secondary" data-dismiss="modal" href="/">
                Cancel
              </a>
              <a type="button" class="btn btn-primary button-color" href="/">
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PetOwnerBookingHomeCare;
