


import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { MovieDataType } from '../../assets/data';
import MovieRecommendCard from '../movie-card';

interface MovieListProps {
    recommendeList :MovieDataType[];

}

const MovieList = ({recommendeList}: MovieListProps) => {
 
  return (
   <Grid container spacing={2}>
    {
      recommendeList.map((movie)=>(
     <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={0} sx={{backgroundColor:"transparent"}}>
         <MovieRecommendCard movie={movie}/>
      </Paper>

     </Grid>
      ))
    }

   </Grid>
  )
}

export default MovieList
