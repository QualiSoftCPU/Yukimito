import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";
import { Box, Button, Hidden } from "@mui/material";
import axios from "axios";
import adminDashboardTabs from "../../components/partials/admin-dashboard/adminDashboardTabs";
import PetOwnersTabComponent from "../../components/partials/admin-dashboard/tabs/pet-owners-tab/PetOwnersTabComponent";
import VaccineTabComponent from "../../components/partials/admin-dashboard/tabs/vaccine-tab/VaccineTabComponent";
import BookingsTabComponent from "../../components/partials/admin-dashboard/tabs/bookings-tab/BookingsTabComponent";

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

  const navItems = [
    <a
      href="/AdminDashBoard"
      style={{ textDecoration: "none", color: "white" }}
    >
      Dashboard
    </a>,
    <a
    href="/AdminMainNav"
    style={{ textDecoration: "none", color: "white" }}
  >
    Home
  </a>
  ];

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
            {adminDashboardTabs.map((tab, index) => {
              return (
                <li class="nav-item" role="presentation">
                  <button
                    class={"nav-link " + (index === 0 ? "active" : "")}
                    id={tab.id}
                    data-bs-toggle="tab"
                    data-bs-target={tab.dataBsTarget}
                    type="button"
                    role="tab"
                    aria-controls={tab.ariaControls}
                    aria-selected={tab.ariaSelected}
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>

          <div class="tab-content" id="myTabContent">
            <BookingsTabComponent />

            <PetOwnersTabComponent />

            <VaccineTabComponent />
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
