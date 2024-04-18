import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Search from './components/Search';
import Channel from './components/Channel';
import Video from './components/Video';
const App =()=> {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
     <Navbar />
     <Routes>
       <Route path='/' element={<Feed/>}/>
       <Route path='/video' element={<Video />}/>
       <Route path='/channel' element={<Channel />}/>
       <Route path='/search' element={<Search />}/> 
     </Routes>
    </Box>
   </BrowserRouter>  
  )
    
}

export default App
