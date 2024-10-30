import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom"
const Navbar = () => {
  const location = useLocation();
  let u="";
  const pathSegments = location.pathname.split("/");
  const id = pathSegments[1]; 

  if (id === "" || id === "signout") {
    u = "#"; 
  } else {
    u = "/home"; 
  }

  return (
   <Stack  
    direction="row"
   
    sx={{ background:'#000',
          padding:'15px',
          position:'sticky' ,
          top:'0',
          justifyContent:'space-between',
          }}>
    <div  style={{display:"flex",color:"red",alignItems:"center",fontWeight:"bolder"}}>
      
    <Link to={u} style={{display:"flex",alignItems:"center", gap:"6px"}}>
        <img src={logo} alt="logo" height={45}/>   
    <Typography variant="h5" style={{color:"red"}}>MixPlay</Typography>
    </Link>
    </div>

   <div style={{display:"flex"}}>
    {u==="#"?null:<SearchBar/>}
    
    
    {u==="#" ?
    <Link to='/'>
    <button class="btnlogin-popup hov">
     Login
    </button> 
    </Link> 
    :
    <Link to='/'>
    <button class="btnlogin-popup hov">
     LogOut
    </button> 
    </Link>}
   </div>
   </Stack>
  )
}

export default Navbar