import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import style from "./style.module.css";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user")) || false;
  const navigate = useNavigate();

  const handleLogout = () => {
    let logout = window.confirm("Logout, Are you sure ?");
    if (logout) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate('/discover/popular')
      window.location.reload(false);
      return;
    } else {
      return;
    }
  };
  return (
    <Box className={style.navbar}>
       <Box className={style.header_box}>
          <h1 className={style.animate_charcter}>CAPITAL MOVIES</h1>
        </Box>
      <Stack
        direction="row"
        sx={{margin:'auto'}}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        justifyContent="flex-end"
      >      
        <Button
          sx={{ height: "fit-content" }}
          onClick={() => navigate("/")}
          variant="link"
          endIcon={<HomeIcon />}
        >
          Popular
        </Button>
        <Button
          sx={{ height: "fit-content" }}
          variant="link"
          onClick={() => navigate("/discover/latest")}
          endIcon={<FiberNewIcon />}
        >
          Latest
        </Button>
        {user ? (
          <Button
            variant="link"
            sx={{ height: "fit-content" }}
            onClick={() => navigate("/discover/favourites")}
            endIcon={
              <FavoriteOutlinedIcon
                sx={{ color: "red" }}
              ></FavoriteOutlinedIcon>
            }
          >
            favourites
          </Button>
        ) : (
          ""
        )}
        {user ? (
          <Button
            className={style.user_Box}
            variant="contained"
            size="small"
            color="success"
            sx={{ height: "fit-content" }}
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
          >
            Hi, {user.full_name}
          </Button>
        ) : (
          <Button
            variant="link"
            sx={{ height: "fit-content" }}
            onClick={() => navigate("/login")}
            endIcon={<LoginIcon />}
          >
            Signup/Login
          </Button>
        )}
      </Stack>
    </Box>
  );
}
