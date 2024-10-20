/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { Card,CardMedia,CardContent ,Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
   <Card sx={{
    width:{md:"280px",xs:"230px"},
    boxShadow:"none",
    borderRadius:0,
   }}>
     <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
      alt={snippet?.title}
      sx={{
        width:"285px",
        height:"163px"
      }}/> 
     </Link>  
     <CardContent sx={{
        backgroundColor:"#1e1e1e",
        height:"100px"
     }}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <Typography sx={{
        mb:"8px"
      }}variant='subtitle1' fontWeight={"bold"} color={"#fff"}>
        {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
      </Typography >
      </Link> 
      <Link to={ snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
      <Typography variant='subtitle2' fontWeight={"bold"} color={"grey"}>
        {snippet?.channelTitle.slice(0,60)|| demoChannelTitle.slice(0,60)}
        <CheckCircleIcon sx={{
            fontSize:12,
            ml:"5px",
            color:"gray"
        }}/>
      </Typography >
      
     </Link> 
      </CardContent>
   </Card>
  )
}

export default VideoCard