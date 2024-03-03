import React, { useContext } from 'react'
import { MovieDataType } from '../../assets/data'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg"
import moviesIcon from "../../assets/icons/icon-category-movie.svg"
import {ReactComponent as BookmarkIcon}  from  "../../assets/icons/icon-bookmark-filled.svg"
import {ReactComponent as BookmarkEmptyIcon} from "../../assets/icons/icon-bookmark-empty.svg"
import { MovieContext } from '../../context/movie-context';

interface MovieTrendListProps{
    movie :MovieDataType;
}
const MovieTrendCard = ({movie}:MovieTrendListProps) => {

    const {dispatch} = useContext(MovieContext);
    const handleToggleBookMark =(id:string)=>{
        dispatch({
            type:"TOGGLE BOOKMARK",
            id:id
        })
    }
  return (
   <Card key={movie.id} elevation={0} style={{backgroundColor:"transparent"}}>
      <CardContent style={{
        padding :0,
        position : "relative",
   
        display:"flex"
      }}>
        <img src={movie.thumbnail.regular.large} alt={movie.title} style={{width:"300px",height:"100%",borderRadius:"8px"}} />
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0,0,0,0.6)" borderRadius="8px" >
            <Stack mt="6" spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
                <Grid container alignItems={'center'} spacing={1}>


                
                 <Grid item>
                    <Typography fontSize={10} color="#E0E0E0">
                        {movie.year}
                    </Typography>
                 </Grid>

                 <Grid item>
                    <Box sx={{
                        width:"1rem",
                        height:"1rem",
                        bg:"#E0E0E0",
                        borderRadius:"full"
                    }}/>

                  
                 </Grid>

                 <Grid item>
                   <img src={movie.category==="Movies"? moviesIcon : tvSeriesIcon} alt=""  width={16} height={16}/>
                 </Grid>

                 <Grid item>
                    <Typography fontSize={10} color="#E0E0E0">
                      {movie.category}
                    </Typography>
                 </Grid>

                 <Grid item>
                    <Box sx={{
                        width:"1rem",
                        height:"1rem",
                        bg:"#E0E0E0",
                        borderRadius:"full"
                    }}/>

                  
                 </Grid>

                 <Grid item>
                    <Typography fontSize={10} color="#E0E0E0">
                      {movie.rating}
                    </Typography>
                 </Grid>
                 </Grid>

                 <Typography color="#E0E0E0" padding={0}>
                    {movie.title}
                 </Typography>



            </Stack>

            <Box sx={{
                position:"absolute",
                top:0,
                right:0,
               left:0,
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-end",
                padding:"16px"
               
            }}>
              <Box sx={{p:"1rem",backgroundColor:"black",borderRadius:"100%",cursor:"pointer","&: hover":{opacity:0.8}}} onClick={()=>handleToggleBookMark(movie.id)}>
                {
                    movie.isBookmarked? (<BookmarkIcon width={24} height={24} />) : (<BookmarkEmptyIcon width={24} height={24}/>)
                }
                 
              </Box>
            </Box>

        </Box>

      </CardContent>
   </Card>
  )
}

export default MovieTrendCard