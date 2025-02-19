import { Box } from '@mui/material'
import React from 'react'
import Dashboard1 from '../Dashboard/Dashboardpage/Dashboard'
import ResultsPage from './Result'

function ResultsMain() {
  return (
    <Box className="Box-1">
    <Dashboard1/>
{/* ------------------------------------ */}

     <Box
       className="Dashmain-Findmain"
     >
        <ResultsPage/>
     </Box>
   </Box>
  )
}

export default ResultsMain
