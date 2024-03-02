import axios from "axios";
import moment from "moment";
import { React, useEffect, useState } from "react";
import NavBarMain from "../../pages/partials/NavBarMain";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import BookingConfirmationInfoCard from '../partials/BookingConfirmationInfoCard';
import { Divider, Paper, List, ListItem } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Autocomplete } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SelectServiceInput from "../partials/SelectServiceInput";
import HailIcon from '@mui/icons-material/Hail';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

const PetOwnerBookingHomeCare = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userSelected = jwtDecode(token);

  const [pets, setPets] = useState([]);

  const [bookingDetails, setBookingDetails] = useState({
    service: "",
    checkIn: "",
    checkOut: "",
    petList: [],
    petOwnerId: userSelected.id
  });

  const petList = pets.map((pet) => pet.name);
  // const petId = pets.map(pet => pet.id);

  const navItems = [];

  const { service } = useParams();

  function handleCheckInInput(event) {

    if (bookingDetails.service) {

      let service = bookingDetails.service;

      if (service === "Home Care") {
        setBookingDetails({
          ...bookingDetails,
          checkIn: event.$d,
          checkOut: moment(event.$d).add(24, 'h').toDate()
        });
      } else if (service === "Day Care") {
        setBookingDetails({
          ...bookingDetails,
          checkIn: event.$d,
          checkOut: moment(event.$d).add(10, 'h').toDate()
        });
      } else {
        setBookingDetails({
          ...bookingDetails,
          checkIn: event.$d,
          checkOut: moment(event.$d).add(4, 'h').toDate()
        });
      }


    } else {
      alert("Please select a service first!")
    }
  }

  function handleServiceSelection(event) {
    console.log(bookingDetails)

    setBookingDetails({
      ...bookingDetails,
      service: event.target.innerText,
    });
  }

  function handlePetSelection(event, index) {

    const selectedPetName = event.target.innerText;
    const selectedPet = pets.find(pet => pet.name === selectedPetName);
    
    if (selectedPet && !bookingDetails.petList.includes(selectedPet.id)) {
      setBookingDetails((prevState) => ({
        ...prevState,
        petList: [...prevState.petList, selectedPet.id],
      }));
    }

    console.log(bookingDetails);
  }

  async function handleBookingAppointmentConfirmation() {
    console.log("Clicked!");
    console.log(service)
    console.log(bookingDetails);

    // if (service === "Home Care") {

    //   axios.post('http://localhost:4269/api/createHomeCareBooking', bookingDetails)
    //   .then((response) => {
    //     console.log(response.data);
    //     // handle success here
    //     alert('Home Care Booking successful!');
    //     navigate('/');
    //   })
    //   .catch((error) => {
    //       console.error(error.message);
    //       // handle error here
    //       alert('Home Care Booking failed!');
    //   });

    // } else if (service === "Day Care") {

    //   axios.post('http://localhost:4269/api/createDayCareBooking', bookingDetails)
    //   .then((response) => {
    //     console.log(response.data);
    //     // handle success here
    //     alert('Day Care Booking successful!');
    //     navigate('/');
    //   })
    //   .catch((error) => {
    //       console.error(error.message);
    //       // handle error here
    //       alert('Day Care Booking failed!');
    //   });
      
    // } else if (service === "Errands Care") {

    //   try {
    //     const response = await axios.post(
    //       "http://localhost:4269/api/createErrandsCareBooking",
    //       bookingDetails,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
  
    //     if (response.status === 200) {
    //       navigate('/');
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }

    // }
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
            <a class="nav-link text-white" href="/">
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
        {/* content */}
        <hr />
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-12">
            <div class="card">
              <Paper elevation={3} style={{ padding: "50px" }}>
                <div className="row">
                  <div className="col"
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

                        <p class="lead mb-4">
                          Please provide us the date for your Check-in.
                        </p>
                        <SelectServiceInput 
                          onClick={handleServiceSelection}
                        />
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                              label="Check In"
                              name="startDateTime"
                              className="input-margin non-inline input-styling"
                              onChange={handleCheckInInput}
                            />
                          </LocalizationProvider>
                          <Stack spacing={2} className="mb-2">
                          
                          {bookingDetails.checkOut && (
  
                            <Alert severity="warning"
                            >
                              <AlertTitle><h5><b>Expected Check Out Time:</b></h5></AlertTitle>
                              {bookingDetails.checkOut.toString()}
                            </Alert>
            
                          )}
                          </Stack>
                        </form>

                        <form
                          action="/action_page.php"
                          className="form-container center"
                        >
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
                  </div>
                  <div className="col">
                  <BookingConfirmationInfoCard 
                    service="Home Care (24 Hours)"
                    checkIn={
                      <span className="text-success">
                        <DirectionsWalkIcon />
                        Check In: 12 noon - 4:30 PM only &nbsp;
                      </span>}
                    checkOut={
                      <span className="text-danger">
                        <HailIcon />Check Out: 11:00 AM
                      </span>
                    }
                    description="Going for a vacation or business trip and worried about your
                      pet, Home Care service is your choice. We take every precaution
                      to provide a safe and stress-free boarding experience for your
                      pet."
                    
                    price={450}
                    duration={24}
                  />
                </div>
                </div>
                
                
                
              </Paper>
            </div>
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
              <button type="button" class="btn btn-primary button-color" onClick={handleBookingAppointmentConfirmation}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetOwnerBookingHomeCare;
