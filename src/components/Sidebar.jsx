/* eslint-disable react/prop-types */
import {  Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = (props) => {
    const {SelectedCategory,setSelectedCategory}=props;
  return (
   <Stack 
   direction="row"
   sx={{
    overflow:"auto",
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:"column"},
   }}>
   {categories.map((categories)=>(
    <button className='category-btn'
    onClick={()=>{
        setSelectedCategory(categories.name);
    }}
    style={{
       backgroundColor: categories.name===SelectedCategory && "red",
       color:"white"
    }}
    key={categories.name}>
        <span 
        style={{
            color:categories.name===SelectedCategory ? "white" : "red",
            paddingRight:"15px"
        }}>{categories.icon}</span>
        <span
        style={{
            opacity:categories.name===SelectedCategory ? "1":"0.8"
        }}>{categories.name}</span>
    </button>
   
   
   ))}
   </Stack>
  )
}

export default Sidebar