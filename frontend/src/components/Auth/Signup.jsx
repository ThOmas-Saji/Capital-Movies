import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { postSignupData } from "../../redux/Auth/authSlice";
import CircularProgress from '@mui/material/CircularProgress';

export default function Signup() {
  const dispatch = useDispatch();
  const [emptyInput, setEmptyInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSignup = () => {
    if (!signupData.full_name || !signupData.email || !signupData.password) {
      setEmptyInput(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(postSignupData(signupData));
    }, 2000);
    return;
  };
  return (
    <Box style={{ width: "100%" }}>
      <Stack className={style.auth_box} spacing={2} direction="column">
        <TextField
          onChange={(e) => handleChanges(e)}
          error={emptyInput && !signupData.full_name ? true : false}
          helperText={
            emptyInput && !signupData.full_name ? "Please enter your name" : ""
          }
          type="text"
          name="full_name"
          size="small"
          label="Full name"
        />
        <TextField
          error={emptyInput && !signupData.email ? true : false}
          helperText={
            emptyInput && !signupData.email ? "Please enter your email" : ""
          }
          onChange={(e) => handleChanges(e)}
          type="email"
          name="email"
          size="small"
          label="E-mail"
        />
        <TextField
          error={emptyInput && !signupData.password ? true : false}
          helperText={emptyInput && !signupData.password ? "Fill this box" : ""}
          onChange={(e) => handleChanges(e)}
          type="password"
          name="password"
          size="small"
          label="Password"
        />
        {loading ? (
          <Box><CircularProgress sx={{margin:'auto'}}></CircularProgress></Box>
        ) : (
          <Button variant="contained" onClick={handleSignup}>
            Sign Up
          </Button>
        )}
      </Stack>
    </Box>
  );
}
