import React from "react";
import { Ques1 } from "./Question1/Ques1";
import "./findmain.css"; // Import CSS file
import { Box } from "@mui/material";
import Dashboard1 from "../Dashboard/Dashboardpage/Dashboard";

function FindMain() {
  return (
    <Box className="Box-1">
     <Dashboard1/>
{/* ------------------------------------ */}

      <Box
        className="Dashmain-Findmain"
      >
       <Ques1 />
      </Box>
    </Box>
  );
}

export default FindMain;

