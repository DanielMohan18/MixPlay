import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Paper,IconButton } from "@mui/material";
import Search from '@mui/icons-material/Search';
const SearchBar = () => {
  const [searchTerm,setsearchTerm]=useState('');
  const navigate =useNavigate();
  const handleSubmit =(e)=>{
      e.preventDefault();

      if(searchTerm){
        navigate(`/search/${searchTerm}`);

        setsearchTerm('');
      }
  }
  return (
    <Paper component={"form"}
           onSubmit={handleSubmit}
           sx={{
            borderRadius:"25px",
            boxShadow:"none",
            width:{xs:"200px"},
            border:"1px solid #e3e3e3",
            pl:2,
            mr:{sm:5}, 
           }}>
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
        <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e)=>{setsearchTerm(e.target.value)}}
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