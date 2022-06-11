import { IconButton, ImageListItemBar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";

export default function AddFavorite(props) {
  const [favoriteIcn, setFavoriteIcn] = useState(false);

  const addTofavorite = () => {
    setFavoriteIcn(!favoriteIcn);
  }

  return (
    <div>
      {" "}
      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(to bottom, #000000df 20%, " +
            "#000000ae 70%, rgba(0,0,0,0) 100%)",
        }}
        title={props.title}
        position="top"
        actionIcon={
          <IconButton
            sx={{ color: favoriteIcn ? "red" : "white" }}
            aria-label={`star ${props.title}`}
            onClick={addTofavorite}
          >
            <FavoriteIcon />
          </IconButton>
        }
        actionPosition="right"
      />
    </div>
  );
}
