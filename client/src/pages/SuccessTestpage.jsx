import React from "react";
import { Button } from "@mui/material";

const handleSubmit = () => {
  localStorage.clear();
  window.location.href = "/";
}


const SuccessTestpage = () => {
  return (
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
  );
};

export default SuccessTestpage;
