import { Button } from "@mui/material";
import React from "react";
import Footer from "../partials/Footer";

const AdminDashBoard = () => {
  function handleSubmit() {
    localStorage.clear();
    window.location.href = "/AdminLogin";
  }


  return (
    <>
      <div className="container px-5" >
        <h1 class="display-5 fw-bold">
          <span className="yuki-font-color">Yukimito</span> Bookings
        </h1>
        <div className="py-3">
          <div className="card shadow">
            <div class="card-header">
              <b>Booking Details</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pet Owner</h5>
              <p class="card-text text-secondary">
                Contact Number: 
                <br />
                Pet Name: 
              </p>
            </div>
          </div>
        </div>

        <Button
          className="button-color"
          variant="contained"
          onClick={handleSubmit}
          style={{ marginRight: "10px" }}
        >
          LOG OUT
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashBoard;
