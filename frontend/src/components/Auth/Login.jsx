import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import style from "./style.module.css";

export default function Login() {
  const [emptyInput, setEmptyInput] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      setEmptyInput(true);
      return;
    }
    console.log(loginData);
  };

  return (
    <Box style={{ width: "100%" }}>
      <Stack className={style.auth_box} spacing={2} direction="column">
        <TextField
          error={emptyInput && !loginData.email ? true : false}
          helperText={
            emptyInput && !loginData.email ? "Please enter your email" : ""
          }
          onChange={(e) => handleChanges(e)}
          type="email"
          name="email"
          size="small"
          label="E-mail"
        />
        <TextField
          error={emptyInput && !loginData.password ? true : false}
          helperText={
            emptyInput && !loginData.password ? "Please fill this box" : ""
          }
          onChange={(e) => handleChanges(e)}
          type="password"
          name="password"
          size="small"
          label="Password"
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Box>
  );
}
