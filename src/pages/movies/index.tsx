
import React, { useState ,SetStateAction, useContext} from "react";
import Layout from "../../Layout";
import SearchIcon from "../../assets/icons/icon-search.svg"
import { Box, Paper, InputBase, InputAdornment, Typography } from "@mui/material";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Movies = () => {
  const [search,setSearch] = useState("");
  const [searchList,setSearchList] = useState<MovieDataType[]>([]);
  const {state} = useContext(MovieContext);
  const {movies} = state;

   let moviesList = movies.filter((movie)=> movie.category==="Movie");

  
  
  const handleSearch = (e:{target:{value:SetStateAction<string>}})=>{
    setSearch(e.target.value)
    const newList = movies.filter((movie)=>
    movie.title.toLowerCase().includes(search.toLowerCase())
    )

    setSearchList(newList)
  }
  return (
    <Layout>
         <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for Tv movies and series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
                <InputAdornment position="start">
                    <img src={SearchIcon} alt="Search Icon" width={20} height={20} />
                </InputAdornment>
  
            }
          />
        </Paper>
      
      </Box>
      <Box py={2} px={4}>
         {search ===""?(
          <Box width="100%">
               
               <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                
                </Typography>
                <Box sx={{display:"flex",gap:2,overflowX:"scroll"}}>
                <MovieList recommendeList={search===""? moviesList : searchList}/>
                </Box>
                
               </Box>
          </Box>
          
         ):
         (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results from the search "{search}"
            </Typography>
            <MovieList recommendeList={searchList}/>
          </Box>
         )
         
         }
      </Box>
    </Layout>
  )
}

export default Movies
