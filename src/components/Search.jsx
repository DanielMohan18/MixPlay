import { Box ,Stack,Typography} from "@mui/material";
import { useState,useEffect } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromUpis";
import { useParams } from "react-router-dom";
const Search = () => {
  const {searchTerm} =useParams();
  const [videos,setvideos] =useState([]);
  useEffect(()=>{
     fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data)=>{
         setvideos(data.items);
     })
  },[searchTerm]);
  return (
    <Box sx={{
      padding:"16px",
      height:"90vh",
      overflowY:"auto",
      flex:2,
      // bgcolor: 'black',
      //   '&:hover': {
      //     bgcolor: 'grey',
      //   },
    }}>
      <Typography
        variant="h4"
        sx={{
        color:"white",
        fontWeight:"bold",
        mb:2,

          }}>
        Search results for: <span style={{
          color:"red"
        }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default Search