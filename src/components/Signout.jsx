import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
const Signout = () => {
    const navigate =useNavigate();
    const [formData,setformData]=useState([]);
    const [errorMessage,seterrorMessage] = useState(null);
    const [Loading,setLoading] =useState(false);
    //getting input text
    const changeHandler=(e)=>{
       setformData({...formData,[e.target.id.toLowerCase()]:e.target.value.trim()});
    }
    console.log(formData)
   //pushing into database for signup
   const handleSubmit= async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.password || !formData.email){
       return seterrorMessage('Please Fill Every Field !');
    }
    try{
       setLoading(true); 
       seterrorMessage(null); 
       const res = await fetch("http://localhost:3000/api/user/signup",{
        method:'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
       }); 
       const data =await res.json();

       if(data.success === false){
            setLoading(false);
            return seterrorMessage(data.message);
       }
       setLoading(false);
       if(res.ok){
        return navigate('/');
       }
    }catch(error){
      setLoading(false);
      seterrorMessage(error.message);
    }
} 
  return (
    <div style={{ backgroundColor: "black", width: "100vw",  color: "white" ,height:"100vh"}}>
    <div class="imp " style={{display:" flex",padding: "20px", maxwidth: "768px", marginLeft: "auto",marginRight: "auto",gap: "20px",}}>
      {/* logo */}
      <div class='mari' >
      <div  style={{display:"flex",color:"red",alignItems:"center",gap:"15px",fontWeight:"bolder"}}>
      <Link to="/">
       <div class="log-text" >
        <img src={logo} alt="logo" class="log" />   
        <span class="text">
         MixPlay
        </span>
       </div>
      </Link>
      </div>
      </div>

      {/* signin */}
      
      <div class="maro">
          <form class="form-container" onSubmit={handleSubmit} >
          <div class="input-group">
         <label for="unsername" class="label">Username:</label>
         <input
         type="username"
         placeholder="Username"
         id="Username"
         class="input"
         onChange={changeHandler}
         />
      </div>

          <div class="input-group">
         <label for="email" class="label">Email:</label>
         <input
         type="email"
         placeholder="name@company.com"
         id="email"
         class="input"
         onChange={changeHandler}
         />
      </div>

      <div class="input-group">
      <label for="password" class="label">Password:</label>
      <input
      type="password"
      placeholder="Password"
      id="password"
      class="input"
      onChange={changeHandler}
      />
     </div>

     <button type="submit" class="submit-btn">
      {Loading ? "loading..":"SignUp"}
     </button>
     </form>
     <span >Already have an acoount? </span><a style={{color:"red"}} href='/'>Signin</a>
            <div style={{marginTop:"10px"}}>
             {errorMessage && <div class="input" >{errorMessage}</div>}
          </div>
      </div>
    </div>
  </div>
  )
}

export default Signout
