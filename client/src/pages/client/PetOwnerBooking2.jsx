import React from "react";
import NavBarUser from "../partials/NavBarUser";
import { Box, Paper, Chip } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select, { SelectChangeEvent } from '@mui/material/Select'


const PetOwnerBooking2 = () => {

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
                  height: 500,
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
                      <Select
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
                      {/* problem with option and selectinput   */}
                        {/* <Option value="dog">Dog</Option>
                        <Option value="cat">Cat</Option>
                        <Option value="fish">Fish</Option>
                        <Option value="bird">Bird</Option> */}
                      </Select>
                    </div>
                  }
                  <div class="col-lg-6 center" className="flex-container">
                    <a class="btn btn-primary button-color" href="#Log In">
                      Book
                    </a>
                  </div>
                </div>
              </Paper>
            </Box>
          </div>
          <div class="col-lg-6 text-center pt-1">
            <Box>
              <div className="container">
                <h1 class="display-6 fw-bold lh-1">
                  <span>Home Care</span>
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
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetOwnerBooking2;
