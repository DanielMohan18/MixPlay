import { Box ,Stack,Typography} from "@mui/material";
import { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromUpis";
const Feed = () => {
  const [SelectedCategory,setSelectedCategory]=useState("New");
  const [videos,setvideos] =useState([]);
  useEffect(()=>{
     fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`)
     .then((data)=>{
         setvideos(data.items);
     })
  },[SelectedCategory]);
  return (
    <Stack sx={{
      flexDirection:{sx:"column",md:"row"},
    }}>
      <Box sx={{
        height:{sx:'auto',md:'92vh'},
        borderRight:"1px solid #3d3d3d",
        px:{sx:0,md:2}
      }}>
        <Sidebar SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography 
        variant="body2"
        sx={{
          mt:"1.5",
          color:"#fff"
        }}>
          CopyRight 2024 World Media
        </Typography>
      </Box>
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
          {SelectedCategory} <span style={{
            color:"red"
          }}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed