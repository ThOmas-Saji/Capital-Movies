import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUser } from "../../redux/Auth/authSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const user = JSON.parse(localStorage.getItem("user")) || false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, success } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(getLoginUser(loginData));
    }, 2000);
    return;
  };
  if (success) {
    const { token, user } = data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }
  if (user) {
    navigate("/discover/popular");
    return;
  }
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
        {loading ? (
          <Box>
            <CircularProgress sx={{ margin: "auto" }}></CircularProgress>
          </Box>
        ) : (
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        )}
      </Stack>
    </Box>
  );
}
