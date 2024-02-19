import {Button} from "@mui/material";
import React from "react";
import Footer from "../partials/Footer";


const AdminDashBoard = () => {


  function handleSubmit() {
    localStorage.clear();
    window.location.href = "/AdminLogin";
}


  return ( 
    <>
    <div>
            <Button
              className="button-color"
              variant="contained"
              onClick={handleSubmit}
              style={{ marginRight: "10px" }}
            >
              LOG OUT
            </Button>

</div>
<Footer/>
</>
)
  }

export default AdminDashBoard;
