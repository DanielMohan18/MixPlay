import { useState,useEffect } from "react";
import { Box,CardMedia } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { demoProfilePicture } from "../utils/constants";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromUpis";
const Channel = () => {
  const [channelDetails,setchannelDetails] = useState(null);
  const [videos,setvideos] =useState([])
  const {id} = useParams();
  console.log(channelDetails,videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{
          setchannelDetails(data?.items[0]);
    })
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setvideos(data.items);
    })
  },[id])
 
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <CardMedia
        sx={{
          height:"400px",
          zIndex:10
        }}
        image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetails?.snippet?.title}/>

       <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
       }}>
       <ChannelCard channel={channelDetails} marginTop='-83px'/>
       </div>
       <Box display={"flex"} p={2}>
       <Box sx={{
        mr:{sm:"120px"}
       }}/>
       <Videos videos={videos}/>
       </Box>
      </Box>
    </Box>
  )
}

export default Channel