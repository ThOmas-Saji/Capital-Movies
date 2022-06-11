import { IconButton, ImageListItemBar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavData, postFavData } from "../../redux/Movies/favouriteSlice";

export default function AddFavorite(props) {
  const user = JSON.parse(localStorage.getItem("user")) || false;
  const dispatch = useDispatch();
  const [favoriteIcn, setFavoriteIcn] = useState(false);
  const [formData] = useState({
    user_id: user?._id,
    title: props?.title,
    poster_path: props.movie?.poster_path,
    release_date: props.movie?.release_date,
    vote_average: props.movie?.vote_average,
    overview: props.movie?.overview,
    movie_id: typeof props.movie.id == "number" ? props.movie.id.toString() : props.movie?.id || props?.title,
  });
  useEffect(() => {
    (function () {
      axios
        .post(`http://localhost:9876/favourites/one`, {
          id: props.movie?.id || props.movie.movie_id  ||props?.title,
          user_id: user?._id,
        })
        .then(({ data }) => {
          if (data) {
            setFavoriteIcn(true);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  const removeFromfavorite = () => {
    dispatch(
      deleteFavData({
        id: props.movie?.id || props.movie.movie_id || props?.title,
        user_id: user?._id,
      })
    );
    setFavoriteIcn(!favoriteIcn);
    window.location.reload(false)
  };
  const addTofavorite = () => {
    dispatch(postFavData(formData));
    setFavoriteIcn(!favoriteIcn);
  };

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
          favoriteIcn ? (
            <IconButton
              sx={{ color: "red" }}
              aria-label={`star ${props.title}`}
              onClick={removeFromfavorite}
            >
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{ color: "white" }}
              aria-label={`star ${props.title}`}
              onClick={addTofavorite}
            >
              <FavoriteIcon />
            </IconButton>
          )
        }
        actionPosition="right"
      />
    </div>
  );
}
