/* eslint-disable react/prop-types */
import { Box,CardMedia,Typography } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";
import {Link} from 'react-router-dom'
const ChannelCard = ({channel,marginTop}) => {
  return (
    <Box sx={{
        width:{md:"285px",xs:"260px"},
        height:"263px",
        boxShadow:"none",
        borderRadius:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:marginTop
       }}>
        <Link to={`/channel/${channel?.id?.channelId}`} >
          <CardMedia 
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          sx={{
            borderRadius:"50%",
            height:"180px",
            width:"180px",
            mb:2,
            border:'1px solid #e3e3e3'
          }}/>
         <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
         }}>
         <Typography variant="h6"
          sx={{
            color:"white",
            }} >
             {channel?.snippet?.title.slice(0,20) || demoChannelTitle }
            <CheckCircle  sx={{
            fontSize:14,
            ml:"5px",
            color:"white"
        }}/>
          </Typography>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
          {channel?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          </div>
        
        </Link>
    </Box>
  )
}

export default ChannelCard