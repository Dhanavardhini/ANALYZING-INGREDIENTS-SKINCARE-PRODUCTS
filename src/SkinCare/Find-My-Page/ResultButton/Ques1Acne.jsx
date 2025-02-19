import { Box , IconButton} from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from 'react'
import Dashboard1 from '../../Dashboard/Dashboardpage/Dashboard'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import acnetreatment from '../../../assets/product3-bg.png'
import enlargedPoresTreatment from '../../../assets/product1-bg.png'
import fineLinesTreatment from '../../../assets/product26-bg.png'
import tanRemovalTreatment from '../../../assets/tanned-bg.png'
import darkCirclesTreatment from '../../../assets/darkcircles-bg.png'
import darkLipsTreatment from '../../../assets/product12-bg.png'
import smoothSkinTreatment from '../../../assets/cetaphil.png'
import skinTypeImage from '../../../assets/product6-bg.png'
import './Quesbutton.css'

export function Ques1Acne() {
  const navigate = useNavigate();

  return (
    <Box className="Box-1">
      <Dashboard1 />
      {/* ------------------------------------ */}
      <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>
   
      {/* Back Button */}
     

      {/* Content Section */}
      <Container fluid className="acne-content-container mt-5">

      <Row>
        <Col className="d-flex justify-content-end row-1">
          <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
            <ArrowBackIcon fontSize="medium" />Back
          </IconButton>
        </Col>
      </Row>

        <Row className="align-items-center mb-5">
          <Col xs={12} md={4} className="image-col">
            <img
              src={acnetreatment}
              alt="Acne Treatment"
              className="img-fluid acne-img"
            />
          </Col>
          <Col xs={12} md={8}>
            <h2 className="heading">Effective Acne Treatment & Skincare</h2>
            <p className="acne-description">
            Acne is a common skin condition affecting millions worldwide. 
            At <strong>Clear Skin Clinic</strong>, we focus on science-backed treatments 
            that help reduce breakouts, prevent scarring, and promote 
            long-term skin health. Our expert dermatologists analyze your skin type and acne severity 
            to create a personalized treatment plan. Whether you struggle with 
            hormonal acne, cystic acne, or occasional breakouts, our approach 
            targets the root causes rather than just the symptoms.
            </p>
            <p className="acne-description">
              We offer a combination of advanced medical therapies, including 
               <strong> topical retinoids, chemical peels, laser treatments, and 
              oral medications</strong>, to achieve clear and healthy skin. 
              Our goal is to heal existing acne while preventing future breakouts 
              and minimizing scars.No two acne cases are the same, which is why we customize each 
              treatment plan based on your unique skin needs. With the right 
              care and consistency, you can achieve clear, glowing skin and 
              regain your confidence.
            </p>
            <Row className="stats-row d-flex flex-wrap">
              <Col xs={12} md={4} className="stat-box">
                <h3>95%</h3>
                <p>Success Rate</p>
              </Col>
              <Col xs={12} md={4} className="stat-box">
                <h3>10K+</h3>
                <p>Satisfied Clients</p>
              </Col>
            </Row>
           
          </Col>
        </Row>
      </Container>

      </Box>
    </Box>
  );
}



// -----------------------

export function Ques2scars() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="fine-lines-content-container mt-5">
        <Row>
          <Col className="d-flex justify-content-end row-1">
            <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
              <ArrowBackIcon fontSize="medium" />Back
            </IconButton>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={4} className="image-col">
            <img
              src={fineLinesTreatment}  // Change image source to fine lines related
              alt="Fine Lines Treatment"
              className="img-fluid fine-lines-img"
            />
          </Col>
          <Col xs={12} md={8}>
            <h2 className="heading">Say Goodbye to Fine Lines & Wrinkles</h2>
            <p className="fine-lines-description">
            Fine lines around your <strong>eyes and forehead</strong> are often the first signs of aging.  
            Over time, your skin loses elasticity and moisture, leading to visible wrinkles.  
            At <strong>Radiant Skin Clinic</strong>, we specialize in advanced skincare treatments  
            that help smooth, hydrate, and restore youthful skin.  
            Our personalized approach ensures that every treatment targets your unique skin concerns,  
            providing long-lasting results and a radiant, youthful glow. 
          </p>

            <p className="fine-lines-description">
              Our expert dermatologists provide **non-invasive treatments**, including  
              <strong>Botox, hyaluronic acid fillers, laser therapy, and retinol-based skincare</strong>.  
              These treatments work by **boosting collagen production, reducing fine lines,  
              and preventing further wrinkles**. In addition to treatments, **proper skincare habits** play a crucial role.  
              Using hydrating serums, broad-spectrum sunscreen, and a healthy lifestyle  
              can significantly slow down the aging process. With the right care,  
              you can maintain firm, youthful skin for years to come.
            </p>
            <Row className="stats-row d-flex flex-wrap">
              <Col xs={12} md={4} className="stat-box">
                <h3>90%</h3>
                <p>Reduction in Wrinkles</p>
              </Col>
              <Col xs={12} md={4} className="stat-box">
                <h3>15K+</h3>
                <p>Happy Clients</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Box>
  </Box>
);

}


// ----------------------------

export function Ques3pores() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="enlarged-pores-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={enlargedPoresTreatment}  // Change image source to enlarged pores related
        alt="Enlarged Pores Treatment"
        className="img-fluid enlarged-pores-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Minimize Enlarged Pores & Achieve Smooth Skin</h2>
      <p className="enlarged-pores-description">
        Enlarged pores are a common skin concern caused by **excess oil production,  
        loss of skin elasticity, and buildup of dirt and debris**.  
        While pores are essential for skin health, their appearance can be reduced  
        with the right skincare and treatments.  
        At <strong>Radiant Skin Clinic</strong>, we offer expert solutions to refine your skin texture  
        and minimize the visibility of pores. Our dermatologists specialize in **pore-reducing treatments**, including  
        <strong>chemical peels, microdermabrasion, laser therapy, and retinoid-based skincare</strong>.  
        These treatments work by **deeply cleansing pores, removing excess oil,  
        and promoting collagen production** to tighten and refine your skin.  
        
      </p>

      <p className="enlarged-pores-description">Consistent exfoliation and hydration are also key to reducing enlarged pores  
      and maintaining a smooth, youthful complexion.
        In addition to professional treatments, maintaining a **proper skincare routine**  
        is essential. Using **oil-free, non-comedogenic products**, applying a  
        **daily broad-spectrum sunscreen**, and incorporating **niacinamide, salicylic acid,  
        and clay masks** into your routine can significantly help control pore size.  
        With the right care, you can achieve refined, even-textured skin.
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>85%</h3>
          <p>Reduction in Pore Size</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>12K+</h3>
          <p>Happy Clients</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

    </Box>
  </Box>
);

}


// -------------------------

export function Ques4tanned() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="tanned-skin-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={tanRemovalTreatment}  // Change image source to tan removal related
        alt="Tan Removal Treatment"
        className="img-fluid tanned-skin-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Get Rid of Tanned Skin & Restore Your Natural Glow</h2>
      <p className="tanned-skin-description">
        Sun exposure, pollution, and environmental factors can cause **tanning,  
        uneven skin tone, and dullness**. Excessive UV exposure triggers melanin  
        production, leading to **dark patches and sunburn**.  
        At <strong>Radiant Skin Clinic</strong>, we provide **advanced tan removal treatments**  
        to help you regain your natural, healthy complexion.  
      </p>

      <p className="tanned-skin-description">
        Our dermatologists specialize in **effective tan removal treatments**, including  
        <strong>chemical peels, laser therapy, microdermabrasion, and brightening facials</strong>.  
        These treatments **reduce pigmentation, exfoliate dead skin cells, and promote  
        skin renewal** for a fresh, even complexion.  
      </p>

      <p className="tanned-skin-description">
        In addition to professional treatments, following a **proper skincare routine**  
        can help prevent and reduce tanning. Using **broad-spectrum sunscreen daily**,  
        applying **vitamin C serums, hydrating masks, and exfoliating scrubs**,  
        and staying hydrated can significantly improve your skin’s brightness.  
        With the right care and protection, you can achieve **radiant, even-toned skin**  
        while preventing further tanning and sun damage.
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>90%</h3>
          <p>Reduction in Skin Tan</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>14K+</h3>
          <p>Clients with Brighter Skin</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>


    </Box>
  </Box>
);

}

// ------------------------------

export function Ques5circles() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="dark-circles-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={darkCirclesTreatment}  // Change image source to dark circles related
        alt="Dark Circles Treatment"
        className="img-fluid dark-circles-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Say Goodbye to Dark Circles & Brighten Your Eyes</h2>
      <p className="dark-circles-description">
        Dark circles under the eyes are a common concern caused by **lack of sleep,  
        stress, genetics, dehydration, and aging**. They can make you look tired  
        and dull, even when you feel well-rested.  
        At <strong>Radiant Skin Clinic</strong>, we offer **advanced treatments**  
        to help reduce dark circles and restore a fresh, youthful look.  
      </p>

      <p className="dark-circles-description">
        Our dermatologists specialize in **effective dark circle treatments**, including  
        <strong>under-eye fillers, laser therapy, chemical peels, and brightening serums</strong>.  
        These treatments **boost collagen production, improve blood circulation,  
        and reduce pigmentation**, helping you achieve brighter, healthier-looking eyes.  
      </p>

      <p className="dark-circles-description">
        In addition to professional treatments, **following a proper skincare routine**  
        can significantly improve dark circles. Using **hydrating eye creams, vitamin C serums,  
        retinol-based products, and cold compresses** can help reduce puffiness and discoloration.  
        Staying hydrated, maintaining a **healthy sleep schedule**, and reducing stress  
        also play a crucial role in keeping your under-eye area fresh and youthful.  
        With the right care, you can achieve **brighter, refreshed eyes** and  
        a naturally radiant appearance.
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>85%</h3>
          <p>Reduction in Dark Circles</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>10K+</h3>
          <p>Clients with Brighter Eyes</p>
        </Col>
      </Row>
    </Col>
  </Row>
     </Container>



    </Box>
  </Box>
);

}

// ------------------------------------

export function Ques6lip() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="dark-lips-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={darkLipsTreatment}  // Change image source to dark lips related
        alt="Dark Lips Treatment"
        className="img-fluid dark-lips-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Lighten Dark Lips & Restore Their Natural Pink Glow</h2>
      <p className="dark-lips-description">
        Dark lips can be caused by **smoking, excessive caffeine, sun exposure,  
        dehydration, hormonal changes, and the use of harsh lip products**.  
        These factors lead to pigmentation, making lips appear darker over time.  
        At <strong>Radiant Skin Clinic</strong>, we offer **advanced treatments**  
        to restore your lips' natural color and softness.  
      </p>

      <p className="dark-lips-description">
        Our dermatologists specialize in **effective dark lips treatments**, including  
        <strong>laser therapy, chemical peels, lip hydration treatments, and  
        pigmentation-reducing serums</strong>. These treatments **exfoliate dead skin,  
        stimulate collagen production, and lighten pigmentation**, leaving your lips  
        soft, smooth, and naturally pink.  
      </p>

      <p className="dark-lips-description">
        In addition to professional treatments, **following a proper lip care routine**  
        is essential. Using **hydrating lip balms with SPF, vitamin E-enriched products,  
        and natural exfoliants like sugar scrubs** can help maintain lip health.  
        Staying hydrated, avoiding smoking, and reducing caffeine intake can also  
        prevent further pigmentation.  
        With the right care, you can achieve **soft, naturally pink lips** and  
        a healthier, more youthful look.  
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>80%</h3>
          <p>Reduction in Lip Pigmentation</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>8K+</h3>
          <p>Clients with Softer, Brighter Lips</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>




    </Box>
  </Box>
);

}


// -------------------------------------

export function Ques7Skin() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="smooth-skin-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={smoothSkinTreatment}  // Change image source to smooth skin related
        alt="Smooth Skin Treatment"
        className="img-fluid smooth-skin-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Achieve Soft, Smooth & Healthy-Looking Skin</h2>
      <p className="smooth-skin-description">
        Skin texture can be affected by **dryness, dehydration, clogged pores,  
        sun damage, and aging**. A rough or uneven skin surface can make your  
        complexion look dull and unhealthy.  
        At <strong>Radiant Skin Clinic</strong>, we offer **expert solutions**  
        to help you achieve **refined, glowing, and smooth skin**.  
      </p>

      <p className="smooth-skin-description">
        Our dermatologists specialize in **effective skin-smoothing treatments**, including  
        <strong>chemical peels, microdermabrasion, laser resurfacing, and hydrating facials</strong>.  
        These treatments **remove dead skin cells, boost collagen production,  
        and improve skin elasticity**, leaving you with a soft, even complexion.  
      </p>

      <p className="smooth-skin-description">
        In addition to professional treatments, **following a proper skincare routine**  
        is crucial for maintaining smooth skin. Using **hydrating serums, gentle exfoliants,  
        and daily sunscreen**, along with **moisturizers containing hyaluronic acid  
        and ceramides**, can help keep your skin plump and healthy.  
        Drinking plenty of **water, eating a nutrient-rich diet, and avoiding harsh  
        skincare products** can also prevent rough, flaky skin.  
        With the right care, you can achieve **soft, radiant skin** that feels smooth to the touch.  
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>90%</h3>
          <p>Improvement in Skin Texture</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>12K+</h3>
          <p>Clients with Healthier Skin</p>
        </Col>
      </Row>
    </Col>
  </Row>
     </Container>

    </Box>
  </Box>
);

}

// -----------------------------------

export function Ques8Skin() {

  const navigate = useNavigate();

return (
  <Box className="Box-1">
    <Dashboard1 />
    {/* ------------------------------------ */}
    <Box className="Acne-Findmain" display="flex" justifyContent="flex-end" p={2}>

      {/* Back Button */}
      <Container fluid className="skin-type-content-container mt-5">
  <Row>
    <Col className="d-flex justify-content-end row-1">
      <IconButton color="primary" onClick={() => navigate("/results")} className='row-1'>
        <ArrowBackIcon fontSize="medium" />Back
      </IconButton>
    </Col>
  </Row>

  {/* Content Section */}
  <Row className="align-items-center mb-5">
    <Col xs={12} md={4} className="image-col">
      <img
        src={skinTypeImage}  // Change image source to skin type related
        alt="Different Skin Types"
        className="img-fluid skin-type-img"
      />
    </Col>
    <Col xs={12} md={8}>
      <h2 className="heading">Understand Your Skin Type & Choose the Right Care</h2>
      <p className="skin-type-description">
        Your skin type determines how it reacts to environmental factors,  
        skincare products, and daily habits. Understanding whether you have  
        **combination, oily, dry, or sensitive skin** is key to maintaining  
        a healthy and balanced complexion.  
      </p>

      <h3 className="subheading">✔ Combination Skin</h3>
      <p className="skin-type-description">
        Combination skin has both **oily and dry areas**, usually with oiliness  
        in the **T-zone (forehead, nose, and chin)** and dryness on the cheeks.  
        <strong>Best care:</strong> Use **gentle cleansers, lightweight moisturizers,  
        and oil-free hydrators** to balance the skin.
      </p>

      <h3 className="subheading">✔ Oily Skin</h3>
      <p className="skin-type-description">
        Oily skin produces excess sebum, leading to **shininess, clogged pores,  
        and acne breakouts**.  
        <strong>Best care:</strong> Use **oil-control cleansers, salicylic acid treatments,  
        and lightweight gel moisturizers** to prevent clogged pores.
      </p>

      <h3 className="subheading">✔ Dry Skin</h3>
      <p className="skin-type-description">
        Dry skin lacks moisture, causing **flakiness, tightness, and irritation**.  
        <strong>Best care:</strong> Apply **hydrating cleansers, thick moisturizers with  
        hyaluronic acid and ceramides, and avoid harsh exfoliants** to maintain hydration.
      </p>

      <h3 className="subheading">✔ Sensitive Skin</h3>
      <p className="skin-type-description">
        Sensitive skin is prone to **redness, irritation, and allergic reactions**.  
        <strong>Best care:</strong> Stick to **fragrance-free, hypoallergenic skincare products,  
        soothing ingredients like aloe vera, and gentle SPF** to protect the skin barrier.
      </p>

      <Row className="stats-row d-flex flex-wrap">
        <Col xs={12} md={4} className="stat-box">
          <h3>95%</h3>
          <p>Clients Found Their Perfect Skincare Routine</p>
        </Col>
        <Col xs={12} md={4} className="stat-box">
          <h3>15K+</h3>
          <p>People with Healthier, Balanced Skin</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>


    </Box>
  </Box>
);

}