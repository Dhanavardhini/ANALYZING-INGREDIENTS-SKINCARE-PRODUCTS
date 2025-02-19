import React, { useState, useEffect } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from 'axios'

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    passwordMatch: "",
  });

  // useEffect(()=>{
  //   const openFun = async()=>{
  //     try{
  //       const res = await axios.post('http://localhost/dhanambackend/controllers/api/user/get/register.php',{email : 'dhanm@gmail.com',password : '134'});
  //       console.log(res);
        
  //     }catch(err){
  //       console.log(err);
  //     }
    
  //   // if(res.data.success){
  //   //   console.log(res.data.success);
  //   // }
  //   // else{
  //   //   console.log(res.data);
      
  //   // }
  //   // console.log(res)
  //   }
  //   openFun()
  // },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email validation: must end with "@gmail.com"
    if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email must end with @gmail.com",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    // Password match validation
    if (name === "confirmPassword" || name === "password") {
      if (
        name === "confirmPassword" &&
        formData.password !== value
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordMatch: "Passwords do not match",
        }));
      } else if (name === "password" && formData.confirmPassword !== "" && formData.confirmPassword !== value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordMatch: "Passwords do not match",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, passwordMatch: "" }));
      }
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (errors.email || errors.passwordMatch) {
      alert("Please correct the errors before submitting.");
      return;
    }
    
    const res = await axios.post('http://localhost/dhanambackend/controllers/api/user/post/register.php',{...formData,username : formData.name});
    if(res.data.message && res.data.message == "User Register successfully"){
      alert("Registration successful!");
      navigate("/login"); // Navigate to login after success  
    }
    else{
      alert('not Register');
    }
    

  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://localhost/dhanambackend/controllers/api/user/post/register.php', 
        
  //         {...formData,username : formData.name}
  //       ,
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );
  //     if(response.data.message && response.data.message == "User Register successfully"){
  //       alert("Registration successful!");
  //       navigate("/login"); // Navigate to login after success  
  //     }
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="register-container">
      <Card className="register-card">
        <Typography variant="h5" className="register-title">
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit} className="formReg">
  <div className="form-group">
    <label>Username</label>
    <TextField
      placeholder="Enter Username"
      name="name"
      variant="outlined"
      fullWidth
      required
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label>Email Id</label>
    <TextField
      placeholder="Enter Email"
      type="email"
      name="email"
      variant="outlined"
      fullWidth
      required
      onChange={handleChange}
      error={!!errors.email}
      helperText={errors.email}
    />
  </div>

  <div className="form-group">
    <label>Password</label>
    <TextField
      placeholder="Password"
      type="password"
      name="password"
      variant="outlined"
      fullWidth
      required
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label>Confirm Password</label>
    <TextField
      placeholder="Re-enter Password"
      type="password"
      name="confirmPassword"
      variant="outlined"
      fullWidth
      required
      onChange={handleChange}
      error={!!errors.passwordMatch}
      helperText={errors.passwordMatch}
    />
  </div>

  <Button type="submit" className="register-button" fullWidth>
  Sign Up
  </Button>
</form>

        <Typography className="register-login-link">
          Already have an account? <span onClick={() => navigate("/login")} className="register-span">Login here!</span>
        </Typography>
      </Card>
    </div>
  );
}
