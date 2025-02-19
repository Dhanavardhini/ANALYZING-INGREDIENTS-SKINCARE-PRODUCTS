import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Results.css";

// Importing images from assets
import result1 from "../../assets/acne1.png";
import result2 from "../../assets/acne2.png";
import result3 from "../../assets/acne3.png";
// import result4 from "../../assets/Product4-bg.png";
import result5 from "../../assets/eye2.png";
import result6 from "../../assets/eye1.png";
import result7 from "../../assets/pores1.png";
import result8 from "../../assets/pores2.png";
import result9 from "../../assets/tanned1.png";
import result10 from "../../assets/darkcircles.png";
import result11 from "../../assets/darklip.png";
import result12 from "../../assets/SmoothSkin1.png";
import result13 from "../../assets/RoughSkin2.png";
import result14 from "../../assets/combination.png";
import result15 from "../../assets/oil.png";
import result16 from "../../assets/dry.png";
import result17 from "../../assets/senstive.png";

// Image configuration
const imageConfig = {
  ques1: { "Combination skin": result14, "Oily skin": result15, "Dry skin": result16, "Sensitive skin": result17},
 
  ques2: { "Few and visible": result5, "Deep and prominent": result6 },
  ques3: { "My pores are generally normal size":result7,"I have a few enlarged": result8 },
  ques4: { "My face is a shade darker": result9 },
  ques5: { "I have noticeable dark circles around my eyes": result10 },
  ques6: { "My lips appear darker than their natural tone": result11 },
  ques7: { "Smooth and bright": result12, "Rough and dull": result13 },
  ques8: { "About Once A Month": result1, "About Once Every Three Months": result2, "My Acne Is Always Present": result3, 
    // "I Break Out Due To Certain Products": result4 
  },
};

// Separate navigation paths for each question
const navigationPaths = {
  ques1: "/details/skin-type",

  ques2: "/details/scars",
  ques3: "/details/pores",
  ques4: "/details/skin-tone",
  ques5: "/details/dark-circles",
  ques6: "/details/dark-lips",
  ques7: "/details/skin-texture",
  ques8: "/details/acne",

};

export default function ResultsPage() {
  const [selectedAnswers, setSelectedAnswers] = useState(null);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [age, setAge] = useState(localStorage.getItem("age") || "");
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");

  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("selectedAnswers")) || {};
    setSelectedAnswers(storedAnswers);
  }, []);

  if (selectedAnswers === null) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <Box className="results-container">
      <Typography variant="h4" className="results-title">
        Your Skin Analysis Results
      </Typography>
      <Typography variant="h5" className="user-info">
        Name: {name} | Age: {age} | Gender: {gender}
      </Typography>

      <Grid container spacing={4} className="results-grid">
      {Object.keys(selectedAnswers).map((questionName, index) => {
  const selectedOption = selectedAnswers[questionName]?.trim(); // Trim to avoid extra spaces
  const imageUrl = imageConfig[questionName]?.[selectedOption] || null;
  const navigatePath = navigationPaths[questionName];

  // console.log(`Question: ${questionName}, Selected Option: ${selectedOption}, Image URL:`, imageUrl);

  return imageUrl ? (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card className="result-card">
        <CardMedia component="img" image={imageUrl} alt={selectedOption} className="result-image" />
        <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" className="result-text">
            {selectedOption}
          </Typography>
          {navigatePath && (
            <Button variant="contained" className="navigate-button" onClick={() => navigate(navigatePath)}>
              View Details
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  ) : null;
})}


      </Grid>
    </Box>
  );
}
