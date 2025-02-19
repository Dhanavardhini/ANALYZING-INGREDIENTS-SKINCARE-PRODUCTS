import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './../LandingPage/Landing.css';

export function Landing() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="landing-container">
      <Card className="LandingCard" >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Skin Care
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Radiant skin is not just about beauty, but health and happiness.
          </Typography>
        </CardContent>
        {/* Centering the buttons and adding navigation */}
        <CardActions className="card-actions">
          <Button 
            className="custom-button" 
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
          <Button 
            className="custom-button-1" 
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>

   
  );
}
