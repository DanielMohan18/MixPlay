import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Search from './components/Search';
import Channel from './components/Channel';
import Video from './components/Video';
import Signin from './components/Signin';
import Signout from './components/Signout';
const App =()=> {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}> 
      <Navbar />
     <Routes>
       <Route path='/home' element={<Feed/>}/>
       <Route path='/video/:id' element={<Video />}/>
       <Route path='/channel/:id' element={<Channel />}/>
       <Route path='/search/:searchTerm' element={<Search />}/>
       <Route path='/' element={<Signin/>}/> 
       <Route path='/signout' element={<Signout />}></Route>
     </Routes>
    </Box>
   </BrowserRouter>  
  )
    
}

export default App
