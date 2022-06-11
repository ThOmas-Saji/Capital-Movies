import React from "react";
import { Box } from "@mui/material";
import style from "./style.module.css";

export default function Loading() {
  return (
    <Box className={style.loading_box}>
      <Box className={style.waviy}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>...</span>
      </Box>
    </Box>
  );
}
