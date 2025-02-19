import React from "react";
import "./ProductGallery.css"; // Add styles if needed
import { Box } from "@mui/material";
import Dashboard1 from "../Dashboard/Dashboardpage/Dashboard";
import ProductGallery from "./ProductGallery";

export default  function ProductMain() {
  return (
    <Box className="Box-1-1">
     <Dashboard1/>
{/* ------------------------------------ */}

      <Box
        className="Dashmain-Findmain-1"
      >
      <ProductGallery/>
      </Box>
    </Box>
  );
}





