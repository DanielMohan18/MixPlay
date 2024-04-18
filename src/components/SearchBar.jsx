import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Paper,IconButton } from "@mui/material";
import Search from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <Paper component={"form"}
           onChange={()=>{}}
           sx={{
            borderRadius:"25px",
            boxShadow:"none",
            width:{sm:300},
            border:"1px solid #e3e3e3",
            pl:2,
            mr:{sm:5}
            
           }}>
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
        <input
        className="search-bar"
        placeholder="search..."
        style={{
            border:"none",
            padding:"10px",
            outline:"none"
        }}
        value=""
        onChange={()=>{}}
       />
       <IconButton
       type="submit"
       sx={{
        padding:"6px",
        color:"red",
       }}>
        <Search/>
       </IconButton>
        </div>
    </Paper>
  )
}

export default SearchBar