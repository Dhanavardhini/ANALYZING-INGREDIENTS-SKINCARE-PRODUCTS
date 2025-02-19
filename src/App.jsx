import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from './SkinCare/Landing/LandingPage/Landing';
import { LoginPage } from './SkinCare/Landing/Login/Login';
import { Register } from './SkinCare/Landing/Register/Register';
import DashboardMain from './SkinCare/Dashboard/Dashboardpage/DashboardMain';
import FindMain from './SkinCare/Find-My-Page/FindMain';
import { ForgetPassward } from './SkinCare/Landing/Login/ForgetPassward';
import { FinalQues } from './SkinCare/Find-My-Page/FinalQues';
import ResultsMain from './SkinCare/Find-My-Page/ResultsMain';
import ProductMain from './SkinCare/Products-Gallery/ProductMain';
import { Ques1Acne, Ques2scars, Ques3pores, Ques4tanned, Ques5circles, Ques6lip, Ques7Skin, Ques8Skin } from './SkinCare/Find-My-Page/ResultButton/Ques1Acne';

const routes = [
  { path: '/', element: <Landing /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/ForgotPassword', element: <ForgetPassward /> },
  { path: '/dashboard', element: <DashboardMain /> },
  { path: '/find-skin-product', element: <FindMain /> }, 
  { path: '/FinalQues', element: <FinalQues /> },
  { path: '/results', element: <ResultsMain /> },
  { path: '/product-gallery', element: <ProductMain /> },
  { path: '/details/acne', element: <Ques1Acne /> },
  { path: '/details/scars', element: <Ques2scars /> },
  { path: '/details/pores', element: <Ques3pores /> },
  { path: '/details/skin-tone', element: <Ques4tanned/> },
  { path: '/details/dark-circles', element: <Ques5circles/> },
  { path: '/details/dark-lips', element: <Ques6lip/> },
  { path: '/details/skin-texture', element: <Ques7Skin/> },
  { path: '/details/skin-type', element: <Ques8Skin/> },
];
function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;