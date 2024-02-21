import { React, useEffect, useState } from "react";
import NavBarMain from "../../pages/partials/NavBarMain";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Divider, Paper, List, ListItem } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Autocomplete } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { yellow } from "@mui/material/colors";

const PetOwnerBookingHomeCare = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userSelected = jwtDecode(token);

  const [pets, setPets] = useState([]);

  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: "",
    checkOutDate: "",
    petsSelected: [],
  });

  const petList = pets.map((pet) => pet.name);
  // const petId = pets.map(pet => pet.id);

  const navItems = [];

  const { service } = useParams();

  function handleCheckInInput(event) {
    setBookingDetails({
      ...bookingDetails,
      checkInDate: event.$d,
    });
  }

  function handleCheckOutInput(event) {
    setBookingDetails({
      ...bookingDetails,
      checkOutDate: event.$d,
    });
  }

  function handlePetSelection(event) {
    console.log(bookingDetails);
    setBookingDetails((prevState) => ({
      ...prevState,
      petsSelected: [...new Set(event.target.innerText.trim())],
    }));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    fetch(`http://localhost:4269/api/getPets/pet/${userSelected.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))
      .catch((error) => console.log(error));
  }, [navigate, userSelected.id]);

  return (
    <>
      <NavBarMain
        navItems={navItems}
        customLink={
          <li class="nav-item active px-3 align-middle yuki-font-color">
            <a class="nav-link text-white" href="/PetOwnerBooking">
              <KeyboardReturnIcon className="me-1" />
              Back to Services
            </a>
          </li>
        }
      />

      <div class="my-5 pt-5 container px-5">
        <h1 class="display-5 fw-bold">
          Booking <span className="yuki-font-color">Confirmation</span>
        </h1>
        <p class="lead mb-4">
          Please provide us the date of your check-in and check-out.
        </p>
        {/* content */}
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6">
            <div class="card">
              <Paper elevation={3} style={{ padding: "50px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {
                    <div className="flex-container" style={{ flex: 1 }}>
                      <form
                        action="/action_page.php"
                        className="form-container center"
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Check In"
                            name="startDateTime"
                            className="input-margin non-inline input-styling"
                            onChange={handleCheckInInput}
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
                            onChange={handleCheckOutInput}
                          />
                        </LocalizationProvider>
                      </form>

                      <Autocomplete
                        sx={{
                          width: "100%",
                        }}
                        multiple
                        options={petList}
                        onChange={handlePetSelection}
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
                    </div>
                  }
                  <div class="col-lg-6 center" className="flex-container"></div>
                </div>
              </Paper>
            </div>
          </div>

          <div class="col-lg-6 text-center pt-1">
            <Box>
              <div className="container">
                <h1 class="display-6 fw-bold lh-1">
                  <span>{service}</span>
                </h1>

                <p class="lead mb-4" style={{ fontSize: "17px" }}>
                  Going for a vacation or business trip and worried about your
                  pet, Home Care service is your choiice. We take every
                  precaution to provide a safe and stress-free boarding
                  experience for your pet.
                </p>
                <p class="text-start">
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

                <a
                  type="button"
                  class="btn btn-primary button-color"
                  data-toggle="modal"
                  data-target="#HomeCareBookNow"
                  href="/"
                >
                  Book
                </a>
              </div>
            </Box>
          </div>
        </div>
      </div>

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
                {service} Booking Confirmation
              </h5>
              {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>*/}
            </div>
            <div
              class="modal-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 class="display-6 fw-bold text-center lh-1">Thank you</h1>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              viverra aliquet tellus suscipit malesuada. Nullam id sollicitudin
              est. Proin interdum ligula ac elit condimentum, vitae lacinia erat
              porta. Donec dictum, nisl quis aliquet volutpat, diam enim
              lobortis urna, nec posuere enim orci sed dolor. */}
              <div> Thank you for availing our {service} service. Please review the
              details of your reservation and kindly wait for our staff to review and confirm your reservation.
              </div>

              <Paper elevation={3} style={{ padding: "30px" , marginTop:"15px"}}>
                <Paper
                  elevation={0}
                  style={{
                    padding: "5px",
                    backgroundColor: "yellow",
                    textAlign: "center",
                  }}
                >
                  Reservation Details
                </Paper>
                <List
                  style={{
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                  }}
                  aria-label="mailbox folders"
                >
                  <ListItem>
                    <div>Check In: {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>Check Out: {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>Pet(s): {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>
                      Total Charge:
                      <p>(Price is subject to change)</p>
                    </div>
                  </ListItem>
                </List>

                {/* <Paper
                  elevation={0}
                  style={{
                    padding: "5px",
                    backgroundColor: "Red",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {" "}
                  Subject to confirmation
                </Paper> */}
              </Paper>
            </div>

            <div class="modal-footer">
              <a
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                href="/"
              >
                Cancel
              </a>
              <a type="button" class="btn btn-primary button-color" href="/">
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetOwnerBookingHomeCare;
