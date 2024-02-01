import React from "react";
import NavBarUser from "../partials/NavBarUser";
import { Box, Paper } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Autocomplete } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Footer from "../partials/Footer";

const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn",
];

const PetOwnerBookingErrandsCare = () => {
  const navItems = [
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      ),
      link: "/PetOwnerDashboard",
    },
    {
      name: "Home",
      link: "",
    },
    {
      name: "BookNow",
      link: "/PetOwnerBooking",
    },
  ];
  return (
    <>
      <NavBarUser navItems={navItems} />

      <div class="my-5 container px-1">
        <h1 class="display-5 fw-bold">
          We are ready to <span className="yuki-font-color">SERVE</span>
        </h1>
        <p class="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
          aliquet tellus suscipit malesuada. Nullam id sollicitudin est. Proin
          interdum ligula ac elit condimentum, vitae lacinia erat porta. Donec
          dictum, nisl quis aliquet volutpat, diam enim lobortis urna, nec
          posuere enim orci sed dolor.
        </p>
        {/* content */}
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6">
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 500,
                  height: 600,
                },
                textAlign: "center",
              }}
            >
              <Paper elevation={3} style={{ padding: "50px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {
                    <div className="flex-container " style={{ flex: 1 }}>
                      <form
                        action="/action_page.php"
                        className="form-container center"
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Check In"
                            name="startDateTime"
                            className="input-margin non-inline input-styling"
                          />
                        </LocalizationProvider>

                        {/* <h5 className="display-10 fw-bold lh-1">Check In</h5>
                            <input type="date" id="CheckIn" name="CheckIn" /> */}
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

                        {/* <h5 className="display-10 fw-bold lh-1">Check Out</h5>
                            <input type="date" id="CheckOut" name="CheckOut" /> */}
                      </form>

                      {/* <form
                            action="/action_page.php"
                            className="form-container center"
                          >
                            <h5 className="display-10 fw-bold lh-1">Select Pets</h5>
                            <input type="date" id="SelectPet" name="SelectPet" />
                          </form> */}

                      {/*  <Select
                            multiple
                            defaultValue={["dog", "cat"]}
                            renderValue={(selected) => (
                              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                                {selected.map((selectedOption) => (
                                  <Chip variant="soft" color="primary">
                                    {selectedOption.label}
                                  </Chip>
                                ))}
                              </Box>
                            )}
                            sx={{
                              minWidth: "16rem",
                            }}
                            slotProps={{
                              listbox: {
                                sx: {
                                  width: "100%",
                                },
                              },
                            }}
                          >
    
    
    
    
    
                            problem with option and selectinput   
                           <Option value="dog">Dog</Option>
                            <Option value="cat">Cat</Option>
                            <Option value="fish">Fish</Option>
                            <Option value="bird">Bird</Option> 
                          </Select>*/}

                      <Autocomplete
                        sx={{ width: 400 }}
                        multiple
                        options={names}
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
                      <h5>Availability</h5>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                      </LocalizationProvider>
                    </div>
                  }
                  <div class="col-lg-6 center" className="flex-container"></div>
                </div>
              </Paper>
            </Box>
          </div>
          <div class="col-lg-6 text-center pt-1">
            <Box>
              <div className="container">
                <h1 class="display-6 fw-bold lh-1">
                  <span>Errands Care</span>
                </h1>

                <p class="lead mb-4" style={{ fontSize: "17px" }}>
                  Going to church, grocery, or an important meeting for a short
                  period of time and you cant attend to your pet needs, Errand
                  service is for you.
                </p>

                <p class="text-start">
                  <p>7:30 AM - 4:30 PM</p>
                  <p>1-4 hours and strictly no late pick up</p>
                  <p>7:00 PM if the last pick up</p>
                  <p>Overnight rate is applied if you pick up after 7:00 PM</p>

                  <p>
                    A treat is provided, please inform our staff if your pet has
                    any allergies.
                  </p>
                </p>

                <h5>
                  Starting at:{" "}
                  <span className="yuki-font-color">₱180/240mins</span>
                </h5>

                <a
                  class="btn btn-primary button-color"
                  href="/PetOwnerBookingErrandsCare"
                >
                  Book
                </a>
              </div>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PetOwnerBookingErrandsCare;
