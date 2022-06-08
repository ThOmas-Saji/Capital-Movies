import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import style from "./style.module.css";

export default function Navbar() {
  return (
    <Box className={style.navbar}>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="flex-end"
      >
        <Box className={style.header_box}>
        <Typography className={style.animate_charcter} variant="h4">
          CAPITAL MOVIES
        </Typography>
        </Box>
        <Link className="link-tag" to={"/"}>
          <Button variant="link" endIcon={<HomeIcon />}>
            Home
          </Button>
        </Link>
        <Link className="link-tag" to={"/login"}>
          <Button variant="link" endIcon={<LoginIcon />}>
            Signup/Login
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
