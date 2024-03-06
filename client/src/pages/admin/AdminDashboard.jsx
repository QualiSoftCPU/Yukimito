import { React, useState, useEffect } from "react";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";

const AdminDashBoard = () => {

  const [ reason, setReason ] = useState("");
  const [bookings, setBookings] = useState([]);

  function handleSubmit() {
    localStorage.clear();
    window.location.href = "/AdminLogin";
  }

  function handleRejectionReason(event) {
    let input = event.target.value;

    setReason(input);
    console.log(reason);
  };

  const navItems = [];

  useEffect(() => {

    fetch(`http://localhost:4269/api/getAllBookings`, {
      headers: {
        Authorization: `Bearer`,
      },
    })
      .then((response) => response.json())
      .then((fetchedBookings) => setBookings(fetchedBookings))
      .catch((error) => console.log(error));
  });

  console.log(bookings);

  return (
    <>
      <NavBarMain navItems={navItems}/>
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back, Admin!
      </div>

      <div className="container px-5">
        <AdminBookingCard 
          handleRejectionReason={handleRejectionReason}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default AdminDashBoard;
