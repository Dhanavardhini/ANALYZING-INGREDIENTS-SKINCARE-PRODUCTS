import React, { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios'


export function LoginPage() {
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
    const res = await axios.post('http://localhost/dhanambackend/controllers/api/user/get/register.php',{...formData});
    if(res.data.success && res.data.success == "Login successful"){
      alert("Login successful!");
      navigate("/dashboard"); 
    }
    else{
      alert('Insert The correct Email and Password');
    }

  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Typography variant="h5" className="login-title">
          Sign In
        </Typography>

        {/* Centered label with light pink color */}
        <Typography className="login-subtitle">
          Sign in with your username and password
        </Typography>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Your Email Id</label>
            <TextField
              placeholder="Enter Email"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Your Password</label>
            <TextField
              placeholder="Enter Password"
              type="password"
              name="password"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
            />
          </div>

          {/* Forgot Password (Right aligned) */}
          <Typography className="login-forgot-password">
            <span onClick={() => navigate("/ForgotPassword")} className="login-span">
              Forgot Password?
            </span>
          </Typography>

          <Button type="submit" className="login-button" fullWidth>
            Login
          </Button>
        </form>

        {/* Register Link (Light Blue Color) */}
        <Typography className="login-register-link">
          Don't have an account? 
           <span onClick={() => navigate("/register")} className="register-span">
             Register here
          </span>
        </Typography>
      </Card>
    </div>
  );
}
