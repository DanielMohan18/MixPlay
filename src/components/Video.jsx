import { useState,useEffect } from "react"
import {Link ,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from "@mui/material"
import {CheckCircle} from '@mui/icons-material'
import Videos from "./Videos"
import Loader from "./Loader"
import { fetchFromAPI } from "../utils/FetchFromUpis"
const Video = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [refvideos, setrefVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then( async (data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then( async (data) => setrefVideos(data.items))
  }, [id]);
  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
   <Box color="#fff" minHeight="95vh">
    <Stack color="#fefeff" direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`}/>
        <Typography color="#fff" variant="h5" fontWeight="semibold" p={2}>
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
      </Box>
      <Box px={2} sx={{overflowY:"auto",height: "700px" }} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center"> 
      <Videos videos={refvideos} direction="column"/>
     </Box>
    </Stack>
   </Box>
  )
}

export default Video