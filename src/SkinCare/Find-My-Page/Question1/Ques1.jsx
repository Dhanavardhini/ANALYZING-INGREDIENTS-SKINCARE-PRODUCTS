import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Ques1.css";

export const Ques1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", age: "", gender: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => localStorage.setItem(key, value));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!formData.name.trim() || !formData.age || !formData.gender) {
      setError("All fields are required.");
      return;
    }
    setError("");
    navigate("/FinalQues");
  };

  const fields = [
    { label: "What is your name?", type: "text", name: "name", placeholder: "Enter your name" },
    { label: "What is your age?", type: "select", name: "age", options: ["10-15", "16-25", "26-32"] }
  ];

  return (
    <div className="ques1-container">
      <div className="ques1-card">
        <h2 className="ques1-heading">Details</h2>
        {error && <p className="error-text">{error}</p>}
        {fields.map(({ label, type, name, placeholder, options }) => (
          <div key={name} className="ques1-row">
            <label className="ques1-label">{label}</label>
            {type === "select" ? (
              <select className="ques1-dropdown" name={name} value={formData[name]} onChange={handleChange}>
                <option value="">Select Age</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input type={type} name={name} className="ques1-input" value={formData[name]} onChange={handleChange} placeholder={placeholder} />
            )}
          </div>
        ))}
        <div className="ques1-row">
          <label className="ques1-label">Gender</label>
          <div className="ques1-radio-group">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender}>
                <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} />
                {gender}
              </label>
            ))}
          </div>
        </div>
        <div className="ques1-button-container">
          <button className="ques1-button" onClick={handleNext} disabled={!formData.name.trim() || !formData.age || !formData.gender}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
