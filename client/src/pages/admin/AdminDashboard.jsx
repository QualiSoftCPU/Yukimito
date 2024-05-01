import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [reason, setReason] = useState("");
  const [bookings, setBookings] = useState([]);

  function handleSubmit() {
    window.location.href = "/AdminLogin";
    localStorage.removeItem("token");
  }

  function handleRejectionReason(event) {
    let input = event.target.value;
    setReason(input);
    console.log(reason);
  }

  async function handleBookingRejection(bookingId) {
    try {
      await axios.put(
        `http://localhost:4269/api/admin/booking/reject/${bookingId}`,
        { reasonForRejecting: reason },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully rejected booking!");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleBookingAcceptance(bookingId) {
    console.log(bookingId);

    try {
      await axios.put(
        `http://localhost:4269/api/admin/booking/accept/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully accepted booking!");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  const navItems = [];

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetch(`http://localhost:4269/api/getAllBookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedBookings) => setBookings(fetchedBookings))
      .catch((error) => console.log(error));
  }, [navigate, token]);

  console.log(bookings);

  return (
    <>
      <NavBarMain navItems={navItems} />
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back, Admin!
      </div>

      <div className="container px-5">
        <h1 class="display-5 fw-bold">
          <span className="yuki-font-color">Welcome Back</span> ...
        </h1>

        <Box sx={{ flexGrow: 1, margin: 5 }}>
          <ul
            class="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="booking-tab"
                data-bs-toggle="tab"
                data-bs-target="#booking"
                type="button"
                role="tab"
                aria-controls="booking"
                aria-selected="true"
              >
                Bookings
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="petowners-tab"
                data-bs-toggle="tab"
                data-bs-target="#petowners"
                type="button"
                role="tab"
                aria-controls="petowners"
                aria-selected="false"
              >
                Pet Owners
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="vaccine-tab"
                data-bs-toggle="tab"
                data-bs-target="#vaccine"
                type="button"
                role="tab"
                aria-controls="vaccine"
                aria-selected="false"
              >
                Vaccine Inventory
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="content-tab"
                data-bs-toggle="tab"
                data-bs-target="#content"
                type="button"
                role="tab"
                aria-controls="content"
                aria-selected="false"
              >
                Content Management
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="controls-tab"
                data-bs-toggle="tab"
                data-bs-target="#controls"
                type="button"
                role="tab"
                aria-controls="controls"
                aria-selected="false"
              >
                Admin Controls
              </button>
            </li>
          </ul>


          {/* contents */}
          <div class="tab-content" id="myTabContent">
            {/* booking content */}
            <div
              class="tab-pane fade show active"
              id="booking"
              role="tabpanel"

              aria-labelledby="booking-tab">
              <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
                <div className="row">
                  <div className="row">
                    <div className="row col-lg-4 col-s-12">
                      <div className="overflow-auto card shadow">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateCalendar />
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className="col-lg-8 col-s-12">
                      <div className="row">
                        <div className="col">
                          <div className="overflow-auto card shadow">
                            <div
                              class="overflow-auto p-3 mb-3 mb-md-0 bg-light"
                              style={{ maxWidth: "800px", maxHeight: "500px" }}
                            >
                              <h4>Pending Bookings</h4>
                              {bookings.map((booking) => {
                                return (
                                  <div>
                                    <>
                                      <AdminBookingCard
                                        bookings={bookings}
                                        handleRejectionReason={handleRejectionReason}
                                        handleBookingRejection={handleBookingRejection}
                                        handleSubmit={handleSubmit}
                                        handleBookingAcceptance={handleBookingAcceptance}
                                        bookingId={booking.id}
                                        petOwnerId={booking.petOwnerId}
                                        service={booking.service_type}
                                        checkIn={booking.checkIn}
                                        checkOut={booking.checkOut}
                                      />
                                    </>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>

            {/* pet owner content */}
              
            {/* pet owners */}
            <div
              class="tab-pane fade"
              id="petowners"
              role="tabpanel"
              aria-labelledby="petowners-tab"
            >
              <div class="container py-3">
                <div class="row">
                  <div>
                    <div class="col align-middle">
                      <div class="input-group mb-3">
                        <input
                          type="search"
                          class="form-control rounded"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                        <span
                          class="input-group-text border-0"
                          id="search-addon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card border">
                  <div class="card-body">
                    <div class="card shadow">
                      <div class="card-body p-3">
                        <div class="card-body d-flex">
                          
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            class="bi bi-person-square me-3"
                            
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                          </svg>
                          <i class="bi bi-person"></i>
                          <div>
                          <h5 class="card-title">
                            Pet Owner Name
                            </h5>
                          <p class="card-text text-secondary">
                            Number of Pets:
                          </p>
                          <p class="card-text text-secondary">Status:</p>
                          </div>
                        </div>
                        <div class="d-flex justify-content-end">
                          <button
                            class="btn btn-outline-secondary mx-2"
                            data-toggle="modal"
                            data-target="#viewPetOwnerModal"
                          >
                            View Pet Owner Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- View Vaccine Details Modal --> */}

              <div
                class="modal fade"
                id="viewPetOwnerModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="viewPetOwnerModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="viewPetOwnerModalTitle">
                        Pet Owner Name
                      </h5>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* vaccine content */}
            {/* vaccine */}
            <div
              class="tab-pane fade"
              id="vaccine"
              role="tabpanel"
              aria-labelledby="vaccine-tab"
            >
              <div class="container py-3">
                <div class="row">
                  <div>
                    <div class="col align-middle">
                      <div class="input-group mb-3">
                        <input
                          type="search"
                          class="form-control rounded"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                        <span
                          class="input-group-text border-0"
                          id="search-addon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                          </svg>
                        </span>
                        <div class="d-flex justify-content-end">
                          <button
                            class="btn btn-primary yuki-color button-border-color mx-2"
                            data-toggle="modal"
                            data-target="#AddVaccineModal"
                          >
                            Add Vaccine
                          </button>
                          <button
                            class="btn btn-danger mx-2"
                            data-toggle="modal"
                            data-target="#RemoveVaccineModal"
                          >
                            Remove Vaccine
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card border">
                  <div class="card-body">
                    <div class="card shadow">
                      <div class="card-header">
                        <b>Vaccine ID </b>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Vaccine Name</h5>
                        <p class="card-text text-secondary">Manufacturer:</p>

                        <div class="d-flex justify-content-end">
                          <button
                            class="btn btn-outline-secondary"
                            data-toggle="modal"
                            data-target="#editVaccineModal"
                          >
                            Edit Vaccine Details
                          </button>
                          <button
                            class="btn btn-outline-secondary mx-2"
                            data-toggle="modal"
                            data-target="#viewVaccineModal"
                          >
                            View Vaccine Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Add Vaccine Modal --> */}

              <div
                class="modal fade"
                id="AddVaccineModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="AddVaccineModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="AddVaccineModalTitle">
                        Add Vaccine
                      </h5>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary yuki-color button-border-color"
                      >
                        Add Vaccine
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Remove Vaccine Modal --> */}

              <div
                class="modal fade"
                id="RemoveVaccineModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="RemoveVaccineModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="RemoveVaccineModalTitle">
                        Remove Vaccine
                      </h5>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary yuki-color button-border-color"
                      >
                        Remove Vaccine
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Edit Vaccine Details Modal --> */}

              <div
                class="modal fade"
                id="editVaccineModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="editVaccineModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="editVaccineModalTitle">
                        Edit Vaccine Detail
                      </h5>
                    </div>
                    <div class="modal-body">...</div>
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
                </div>
              </div>

              {/* <!-- View Vaccine Details Modal --> */}

              <div
                class="modal fade"
                id="viewVaccineModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="viewVaccineModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="viewVaccineModalTitle">
                        Vaccine Detail
                      </h5>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      {/* <button type="button" class="btn btn-primary yuki-color button-border-color">Save changes</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Box>
        <Button
          className="button-color"
          variant="contained"
          onClick={handleSubmit}
          style={{ marginRight: "10px" }}
        >
          LOG OUT
        </Button>
      </div>
    </>
  );
};

export default AdminDashBoard;
