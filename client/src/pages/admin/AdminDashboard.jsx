import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";
import { Box, Button } from "@mui/material";
import axios from "axios";

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
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="booking"
              role="tabpanel"
              aria-labelledby="booking-tab"
            >
              {bookings.map((booking) => {
                return (
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
                );
              })}
            </div>
            <div
              class="tab-pane fade"
              id="petowners"
              role="tabpanel"
              aria-labelledby="petowners-tab"
            >
              ...
            </div>

            <div
              class="tab-pane fade"
              id="vaccine"
              role="tabpanel"
              aria-labelledby="vaccine-tab"
            >
              <div class="container py-3">
                
                  <div class="row">
                    <div >
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
                                <button class="btn btn-primary yuki-color button-border-color mx-2">
                                  Add Vaccine
                                </button>
                                <button class="btn btn-danger mx-2">
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
                      </div>
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