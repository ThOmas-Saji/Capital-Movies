import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import LatestMovies from "../LatestMovies/LatestMovies";
import Favourites from "../Favourites/Favourites";

export default function AllRoutes() {
  return (
    <Container>
      <Navbar />
      <Box style={{ height: "10vh", width: "100%" }}></Box>
      <Routes>
        <Route path="/" element={<Navigate to="/discover/popular" />} />
        <Route path="/discover/popular" element={<Home />} />
        <Route path="/discover/favourites" element={<Favourites />} />
        <Route path="/discover/latest" element={<LatestMovies />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Container>
  );
}
