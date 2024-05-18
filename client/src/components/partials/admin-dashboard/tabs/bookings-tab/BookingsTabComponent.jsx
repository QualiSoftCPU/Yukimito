import AdminBookingCard from "../../../../../pages/partials/AdminBookingCard";
import { Box } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bookingSubTabs from "./bookingSubTabs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const BookingsTabComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [reason, setReason] = useState("");
  const [bookings, setBookings] = useState([]);
  const [petOwners, setPetOwners] = useState([]);

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

  useEffect(() => {
    if (!token) {
      navigate("/AdminLogin");
    }

    fetch(`http://localhost:4269/api/getAllBookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedBookings) => setBookings(fetchedBookings))
      .catch((error) => console.log(error));

    fetch(`http://localhost:4269/api/auth/getAllPetOwners`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((fetchedPetOwners) => setPetOwners(fetchedPetOwners))
    .catch((error) => console.log(error));
  }, [navigate, token]);

  console.log(bookings);
  return (
    <div
      class="tab-pane fade show active"
      id="booking"
      role="tabpanel"
      aria-labelledby="booking-tab"
    >
      <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
        <div>
          <div className="row">
            <div className="row col-lg-6 col-s-12 mb-4">
              <div className="overflow-auto card shadow h-100">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateCalendar
                    sx={{
                      marginBottom: "20px",
                      width: "100%", // Full width
                      "& .MuiPickersCalendarHeader-root": {
                        fontSize: "1.5rem", // Resize header font
                      },
                      "& .MuiPickersDay-root": {
                        width: 45, // Resize individual day
                        height: 45, // Resize individual day
                      },
                      "& .MuiPickersDay-dayOutsideMonth": {
                        opacity: 0.5, // Adjust visibility of days outside the month
                      },
                    }}
                    
                  />
                </LocalizationProvider>
                <div className="card-body overflow-auto">
                  <div
                    class="overflow-auto p-3 mb-3 mb-md-0 bg-light"
                    style={{ maxWidth: "800px", maxHeight: "200px" }}
                  >
                    {bookings.map((booking) => {
                      return (
                        <div>
                          <>
                            <AdminBookingCard
                              bookings={bookings}
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

            <div className="col col-lg-6 col-s-12 mb-4">
              <div className="overflow-auto card shadow h-100">
                <h4 className="card-header">Ongoing Bookings</h4>
                <div
                  class="overflow-auto p-3 mb-3 mb-md-0 bg-light"
                  style={{ maxWidth: "800px", maxHeight: "500px" }}
                >
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
            {/* pending */}
            <div className="row col-lg-12">
              <div className="overflow-auto card shadow h-100">
                <h4 className="card-header">Pending Bookings</h4>
                <div
                  class="overflow-auto p-3 mb-3 mb-md-0 bg-light"
                  style={{ maxWidth: "100%", maxHeight: "500px" }}
                >
                  {bookings.filter((booking) => booking.status === "pending").map((booking) =>  {
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
                            petOwners={petOwners}
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
      </Box>
    </div>
  );
};

export default BookingsTabComponent;
