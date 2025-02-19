import React, { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios'


export function ForgetPassward() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost/dhanambackend/controllers/api/user/put/passwordupdate.php',{...formData});
    if(res.data.success && res.data.success == "Password updated successfully"){
      alert("Reset Password successful!");
      navigate("/login"); 
      console.log("write")
    }
    else{
      alert('give the correct Email!');
      console.log("wrong")
    }

  };


  return (
    <div className="login-container">
      <Card className="login-card">
        <Typography variant="h5" className="login-title">
          Forgot Password
        </Typography>
    
        {/* Centered label with light pink color */}
        <Typography className="login-subtitle">
          Enter your Email and New Password to reset
        </Typography>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <TextField
              placeholder="Enter your Email"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">New Password</label>
            <TextField
              placeholder="Enter your new Password"
              type="password"
              name="password"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="login-button" fullWidth>
            Reset Password
          </Button>
        </form>

        {/* Register Link (Light Blue Color) */}
        <Typography className="login-register-link">
          Remembered your Password?
           <span onClick={() => navigate("/login")} className="register-span">
             Login here
          </span>
        </Typography>
      </Card>
    </div>
  );
}
