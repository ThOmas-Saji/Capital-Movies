import { Box } from "@mui/material";
import React from "react";

export default function Favourites() {
  const user = JSON.parse(localStorage.getItem("user")) || false;

  if (!user) {
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "30%", margin: "auto", color:"red" }}>
          <h2>Permission Denied</h2> 
          <br />
          <p style={{color:'white'}}>Please Signup / Login</p> 
        </Box>
      </Box>
    );
  }
  return <div>User Favourites</div>;
}
