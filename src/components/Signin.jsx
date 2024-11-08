import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const [formData,setformData]=useState([])
    const [errorMessage,seterrorMessage] =useState(null);
    const navigate=useNavigate();
    const changeHandler=(e)=>{
       setformData({...formData,[e.target.id]:e.target.value})
    }

    const submitHandler=async(e)=>{
        e.preventDefault(); 
        if(!formData.email || !formData.password){
            return seterrorMessage("All fields are required!");
        }
        try{
            seterrorMessage(null); 
            const res = await fetch("/api/user",{
            method:'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
       }); 
       const data =await res.json();

       if(data.success === false){
            return seterrorMessage(data.message);
       }
       if(res.ok){
        return navigate('/home');
       }
    }catch(error){
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
            <form class="form-container" onSubmit={submitHandler} >
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
          Login
       </button>
       </form>
       <span>Don't have an acoount? </span><a style={{color:"red"}} href='/signout'>SignUp</a>
            <div style={{marginTop:"10px"}}>
             {errorMessage && <div class="input" >{errorMessage}</div>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
