import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"
const Navbar = () => {
  return (
   <Stack  
    direction="row"
    p={2}
    sx={{ background:'#000',
        //   padding:'4px',
          position:'sticky' ,
          top:'0',
          justifyContent:'space-between'
          }}>
    <div  style={{display:"flex",color:"red",alignItems:"center",gap:"15px",fontWeight:"bolder"}}>
    <Link to="/" style={{display:"flex",alignItems:"center",}}>
        <img src={logo} alt="logo" height={45}/>   
    </Link>
    <Typography variant="h5">MixPlay</Typography>
    </div>
    <SearchBar/>
   </Stack>
  )
}

export default Navbar