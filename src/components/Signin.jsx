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
            const res = await fetch("http://localhost:3000/api/user",{
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
      <div style={{display:" flex",padding: "20px", maxwidth: "768px", marginLeft: "auto",marginRight: "auto",flexdirection: "column",gap: "20px",}}>
        {/* logo */}
        <div style={{flex:1,marginLeft:"200px",paddingTop:"200px"}}>
        <div  style={{display:"flex",color:"red",alignItems:"center",gap:"15px",fontWeight:"bolder"}}>
        <Link to="/" style={{display:"flex",alignItems:"center",}}>
        <img src={logo} alt="logo" height={90}/>   
        <Typography variant="h1" style={{color:"red"}}>MixPlay</Typography>
        </Link>
        </div>
        </div>

        {/* signin */}
        
        <div style={{flex:1,marginLeft:"10px",paddingTop:"150px"}}>
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
