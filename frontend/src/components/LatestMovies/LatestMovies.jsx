import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLatestMovies } from "../../redux/Movies/fetchMovies";
import AddFavorite from "../AddFavorite/AddFavorite";
import Loading from "../Loading/Loading";
import error404Img from "../../Assets/404NF.png";

export default function LatestMovies() {
  const user = JSON.parse(localStorage.getItem("user")) || false;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.latestMovies);
  const [movies, setMovies] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [favoriteIcn, setFavoriteIcn] = useState(false);
  let callOne = useRef(false);
  useEffect(() => {
    dispatch(getLatestMovies());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    callOne.current = true;
    setMovies(true);
    if (callOne) {
      return () => {};
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {movies
          ? data.map((movie, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Box className={style.movie_Box}>
                  <ImageListItem>
                    <img
                      width="100%"
                      height="100%"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : error404Img
                      }
                      alt="movie_poster"
                    />
                    {user ? (
                      <AddFavorite movie={movie} title={movie?.title} />
                    ) : (
                      <ImageListItemBar
                        sx={{
                          background:
                            "linear-gradient(to bottom, #000000df 20%, " +
                            "#000000ae 80%, rgba(0,0,0,0) 100%)",
                        }}
                        title={movie?.title}
                        position="top"
                      />
                    )}
                    <ImageListItemBar
                      title={`${movie?.vote_average}/10`}
                      subtitle={`${movie?.release_date}`}
                      sx={{
                        background:
                          "linear-gradient(to top, #000000df 20%, " +
                          "#000000ae 80%, rgba(0,0,0,0) 100%)",
                      }}
                    />
                  </ImageListItem>
                  <Box>
                    <Card className={style.movie_overview}>
                      <CardHeader
                        title={
                          <Typography variant="body2">overview</Typography>
                        }
                      />
                      <CardContent>
                        <p className={style.overview_body}>{movie?.overview}</p>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            ))
          : ""}
      </Grid>
    </Container>
  );
}
