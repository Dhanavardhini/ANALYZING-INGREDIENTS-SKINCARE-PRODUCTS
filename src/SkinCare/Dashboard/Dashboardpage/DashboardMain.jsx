import React from 'react';
import Dashboard1 from './Dashboard';
import { Box } from '@mui/material';
import HomePage from '../Home/HomePage';
import "./Dashboard.css";

function DashboardMain() {
  return (
    <Box className="Box-1">
     <Dashboard1/>
{/* ------------------------------------ */}

      <Box
        className="Dashmain"
      >
      <HomePage/>
      </Box>
    </Box>
  );
}

export default DashboardMain;
