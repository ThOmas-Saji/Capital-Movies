import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [switchAuth, setSwitchAuth] = useState(false);
  return (
    <Box style={{ width: "100%" }}>
      {switchAuth ? <Login /> : <Signup />}
      <Box
        style={{
          margin: "auto",
          width: "fit-content",
          blockSize: "fit-content",
        }}
      >
        <Typography variant="body2">
          If you {switchAuth ? "don't" : ""} have an account ?
          <Button
            size="small"
            variant="ghost"
            onClick={() => {
              setSwitchAuth(!switchAuth);
            }}
          >
            {switchAuth ? "Signup" : "Login"}
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
