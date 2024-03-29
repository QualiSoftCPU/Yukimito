import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";
import { Button } from "@mui/material";
import axios from "axios";


const AdminDashBoard = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [ reason, setReason ] = useState("");
  const [bookings, setBookings] = useState([]);

  function handleSubmit() {
    window.location.href = "/AdminLogin";
    localStorage.removeItem("token");
  }

  function handleRejectionReason(event) {
    let input = event.target.value;
    setReason(input);
    console.log(reason);
  };

  async function handleBookingRejection(bookingId) {
    try {
      await axios.put(
        `http://localhost:4269/api/admin/booking/reject/${bookingId}`,
        {"reasonForRejecting": reason},
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
  };

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
  };

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
      <NavBarMain navItems={navItems}/>
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back, Admin!
      </div>

      <div className="container px-5">
        <h1 class="display-5 fw-bold">
          <span className="yuki-font-color">Yukimito</span> Bookings
        </h1>
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
          )
        })}
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
