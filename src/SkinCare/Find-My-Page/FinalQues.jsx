import { Box } from '@mui/material';
import React, { useState } from 'react';
import Dashboard1 from '../Dashboard/Dashboardpage/Dashboard';
import { useNavigate } from "react-router-dom";
import "./findmain.css"; 


export function FinalQues() {
  return (
    
   <Box className="Box-1">
     <Dashboard1/>
{/* ------------------------------------ */}

      <Box
        className="Dashmain-Findmain"
      >
       <FinalQues1 />
      </Box>
    </Box>
      
   
  );
}

// ------------------------------

// Question Data

const data = [
  { question: "1. Which of the following is true for your skin?", options: ["Combination skin", "Oily skin", "Dry skin", "Sensitive skin"],  name: "ques1" },
  { question: "2. Describe the fine lines around your eye and forehead?", options: ["No fine lines", "Few and visible", "Deep and prominent"], name: "ques2" },
  { question: "3. Do you have enlarged pores?", options: ["My pores are generally normal size", "I have a few enlarged"], name: "ques3" },
  { question: "4. Are you currently tanned?", options: ["My face isn't tanned", "My face is a shade darker"], name: "ques4" },
  { question: "5. Do you have dark circles on your face?", options: ["I have noticeable dark circles around my eyes", "I do not have any dark circles around my eyes"], name: "ques5" },
  { question: "6. Do you have dark lips?", options: ["My lips appear darker than their natural tone", "My lips have their natural color without darkening"], name: "ques6" },
  { question: "7. What does your skin usually feel like?", options: ["Smooth and bright", "Rough and dull"], name: "ques7" },
  { question: "8. How Often Does Your Acne Appear?", options: ["About Once A Month", "About Once Every Three Months", "My Acne Is Always Present", "There is no acne on my face"], name: "ques8" },
];

export function FinalQues1() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleChange = (questionName, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionName]: option,
    }));
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    navigate("/results");
  };

  return (
    <div className="FinalQues1-container">
      <div className="card">
        <h2>{data[currentIndex].question}</h2>
        <div className="options">
          {data[currentIndex].options.map((option, index) => (
            <label key={index} className="option-label">
              <input required
                type="radio"
                name={data[currentIndex].name}
                value={option}
                checked={selectedAnswers[data[currentIndex].name] === option}
                onChange={() => handleChange(data[currentIndex].name, option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="button-container">
          {currentIndex > 0 && (
            <button className="prev-button" onClick={handlePrev}>
              Previous
            </button>
          )}

        {currentIndex < data.length - 1 ? (
          <button
            className={`next-button ${!selectedAnswers[data[currentIndex].name] ? "disabled" : ""}`} 
            onClick={handleNext}
            disabled={!selectedAnswers[data[currentIndex].name]}
          >
            Next
          </button>) : (
          <button
            className={`submit-button ${!selectedAnswers[data[currentIndex].name] ? "disabled" : ""}`} 
            onClick={handleSubmit}
            disabled={!selectedAnswers[data[currentIndex].name]}
          >
            Submit
          </button>
        )}
      </div>

      </div>
    
    </div>
  );
}


// ----------------------------------

export function FinalQues2({ quesList, handleChange, selectedAnswers }) {
  return (
    <div>
      {quesList?.map((item) => (
        <div key={item.name}>
          <h5 className='question'>{item.question}</h5>
          {item.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={item.name}
                value={option}
                checked={selectedAnswers[item.name] === option}
                onChange={() => handleChange(item.name, option)}
              />
              <label className='option' >{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const imageConfig = {
    ques1: { "About Once A Month": "/images/acne_monthly.png", "About Once Every Three Months": "/images/acne_3months.png", "My Acne Is Always Present": "/images/acne_always.png", "I Break Out Due To Certain Products": "/images/acne_products.png" },
    ques2: { "Few and visible": "/images/few_fine_lines.png", "Deep and prominent": "/images/deep_fine_lines.png" }, // "No fine lines" should not display an image
    ques3: { "I have a few enlarged": "/images/enlarged_pores.png" }, // "My pores are generally normal size" should not display an image
    ques4: { "My face is a shade darker": "/images/tanned.png" }, // "My face isn't tanned" should not display an image
    ques5: { "Yes": "/images/dark_circles.png" }, // "No" should not display an image
    ques6: { "Yes": "/images/dark_lips.png" }, // "No" should not display an image
    ques7: { "Smooth and bright": "/images/smooth_bright.png", "Rough and dull": "/images/rough_dull.png" },
    ques8: { "Combination skin": "/images/combination_skin.png", "Oily skin": "/images/oily_skin.png", "Dry skin": "/images/dry_skin.png", "Sensitive skin": "/images/sensitive_skin.png" },
  };

 export function ImageDisplay({ selectedAnswers }) {
    return (
      <div>
        <h3>Selected Images:</h3>
        {Object.keys(selectedAnswers).map((questionName) => {
          const selectedOption = selectedAnswers[questionName];
          const imageUrl = imageConfig[questionName]?.[selectedOption];
  
          return imageUrl ? (
            <div key={questionName}>
              <h4>{selectedOption}</h4>
              <img src={imageUrl} alt={selectedOption} width="200px" />
            </div>
          ) : null; // If no image URL, do not display anything
        })}
      </div>
    );
  }