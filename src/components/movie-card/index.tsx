import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import {ReactComponent as BookmarkIcon}  from  "../../assets/icons/icon-bookmark-filled.svg";
import {ReactComponent as BookmarkEmptyIcon} from "../../assets/icons/icon-bookmark-empty.svg";

interface MovieRecommendListProps {
  movie: MovieDataType;
}
const MovieRecommendCard = ({ movie }: MovieRecommendListProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookMark = (id: string) => {
    dispatch({
      type: "TOGGLE BOOKMARK",
      id: id,
    });
  };
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt={movie.title}
              style={{ width: "400px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item>
                <Typography fontSize={10} color="#E0E0E0">
                  {movie.year}
                </Typography>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>

              <Grid item>
                <img
                  src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie-rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label="movie rating" padding={0}>
              {movie.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ position: "absolute", top: 0, right: 0 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  p: "1rem",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookMark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkIcon width={24} height={24}/>
                ) : (
                  <BookmarkEmptyIcon width={24} height={24}/>
                )}
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieRecommendCard;
