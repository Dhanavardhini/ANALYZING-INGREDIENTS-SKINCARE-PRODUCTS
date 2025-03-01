import { Carousel } from "react-bootstrap";
import { Box, Button, } from "@mui/material";
import './HomePage.css'
import { Container, Row, Col,Card} from "react-bootstrap";
import SkinAbout from '../../../assets/about.jpg'
import service1 from '../../../assets/service-1.jpg';
import service4 from '../../../assets/pic5.jpg';
import service6 from '../../../assets/service6.png';
import service7 from '../../../assets/service7.jpg';
import service2 from '../../../assets/service-2.jpg';
import service3 from '../../../assets/service-3.jpg';
import service5 from '../../../assets/Bathdubbing.png';
import testimonial2 from '../../../assets/testimonial-2.jpg';
import testimonial1 from '../../../assets/testimonial-1.jpg';
import testimonial3 from '../../../assets/testimonial-3.jpg';
import Avatar from '@mui/material/Avatar';
import Footer from "./Footer";

export default function HomePage() {
  const cardData = [
    {
      id: 1,
      title: "DAILY ROUTINE",
      text: " Nurture it consistently for beautiful blooms",
      image: service1, 
    },
    {
      id: 2,
      title: "WEEKLY ROUTINE",
      text: "Show it consistent love with a dedicated routine",
      image: service2, 
    },
    {
      id: 3,
      title: "FACE MASKING",
      text: "It gives your skin stay healthy and radiant",
      image:service3, 
    },
    {
      id: 4,
      title: "DAILY ROUTINE",
      text: "Nurture it consistently for beautiful blooms",
      image: service6, 
    },
    {
      id: 5,
      title: "WEEKLY ROUTINE",
      text: "Show it consistent love with a dedicated routine",
      image: service7, 
    }, {
      id: 6,
      title: "FACE MASKING",
      text: "It gives your skin stay healthy and radiant",
      image: service4, 
    },
  ];


  const testimonials = [
    {
      id: 1,
      name: "HADID DEEPS",
      profession: "Interior Designer",
      image: testimonial2,
      review:
        "I Struggled with dry, SenSitive Skin.Your Customized routine using gentle cleansers and hydrating serums transformed my skin amazingly.",
    },
    {
      id: 2,
      name: "EVA GREEN",
      profession: "Developer",
      image: testimonial1,
      review:
        "Since using your persnolized routine,my acne has significantly reduced can my skin feels clearer and smooother than ever. ",
    },
    {
      id: 3,
      name: "EMA WATTSON",
      profession: "Advocate",
      image: testimonial3,
      review:
        "I was skeptical at first, but i'm so glad i tried your personolized routine! My skin feels smoothe,Real People,Real results.",
    },
  ];

  return (
    <Box className='HomePage-container'>
     <Carousel className="HomePage-1" indicators={false}
            controls={false}  // Hide left and right arrows
            interval={2000}  >
      {/* First Slide */}
      <Carousel.Item className="slide slide-1">
        <Carousel.Caption>
          <p className="animate-top">FACE MASK CENTER</p>
          <h1>Facial Treatment</h1>
          <p>Think of face masks as a spa for your skin</p>
          <Button className="animated-button">Explore Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item className="slide slide-2">
        <Carousel.Caption>
          <p className="animate-top">SKIN CARE CENTER</p>
          <h1>LOVE TOWARDS SKIN</h1>
          <p>Let's Unlock Your Glow With Us</p>
          <Button className="animated-button">Explore Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item className="slide slide-3">
        <Carousel.Caption>
          <p className="animate-top">SKIN ADVICE</p>
          <h1>Consistent routines</h1>
          <p>Neglecting routines is like missing out on a key step in your journey</p>
          <Button className="animated-button">Explore Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      {/* ------------------------ */}

      <Container className="skin-care-container">
      {/* First Row - Image (5 cols) + Button (7 cols) */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={5}  className="image-col">
          <img
            src={SkinAbout}
            alt="Skin Care"
            className="img-fluid skincare-img"
          />
        </Col>
        <Col xs={12} md={7} >
          <Button className="about-btn ">ABOUT US</Button>
          <h2 className="heading">Your Best Skin Care & Beauty Center</h2>
          <p className="SKIN-P">
            SPLENDID SKIN is based on the science of how your skin, body, and mind function together, 
            rather than the concept of selling one product promising to give you the most beautiful 
            poreless skin with just one application.
          </p>
          <Row className="stats-row d-flex flex-wrap">
            <Col xs={12} md={4} className="stat-box" >
              <h3>99</h3>
              <p>Dermatologists</p>
            </Col>
            <Col xs={12} md={3} className="stat-box ">
              <h3>999</h3>
              <p>Happy Clients</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* ----------------------- */}

      <Row className="justify-content-center">
        <Col xs={12} md={12} className="d-flex justify-content-center">
          <Button className="Row-2">OUR SERVICE</Button>
        </Col>
      </Row>

      {/* ------------------------------ */}

      <Row className="justify-content-center mb-1">
        <Col xs={12} md={12} className="d-flex justify-content-center Row-3">
        <h1 className="bold-heading">Beauty & Care Services</h1>
        </Col>
      </Row>

 
      </Container>

      {/* --------------------------------- */}

      <Container fluid className=" mb-5">
        <Row>
          {cardData.map((card) => (
            <Col xs={12} sm={6} md={4} lg={2} key={card.id} className="d-flex justify-content-center">
              <Card className="custom-card">
                <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}></div>
                <Card.Body className="card-body">
                  <Card.Title className="card-body-tittle">{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button className="hidden-button">Now</Button>{/* Initially hidden */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="skin-care-container-1 ">
      {/* First Row - Image (5 cols) + Button (7 cols) */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={5} className="image-col">
          <img
            src={service5}
            alt="Skin Care"
            className="img-fluid skincare-img-1"
          />
        </Col>
     
        <Col xs={12} md={7} >
          <Button className="about-btn mt-5 mb-3">TESTIMONIAL</Button>
          <h2 className="heading">What Our Clients Say!</h2>
          <Carousel 
            indicators={false}
            controls={false}  // Hide left and right arrows
            interval={2000}   // Auto change every 2 seconds
            className="testimonial-carousel-1"
          >
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id} className="carousel-item-1">
                <Col xs={12}>
                  {/* Avatar + Name + Profession */}
                  <Col xs={12} md={7} className="d-flex align-items-center stat-box-1">
                    <Avatar 
                      alt={testimonial.name} 
                      src={testimonial.image} 
                      className="me-3 custom-avatar" 
                    />
                    <div>
                      <h5 className="mb-1 custom-h5">{testimonial.name}</h5>
                      <p className="mb-0 text-grey ">{testimonial.profession}</p>
                    </div>
                  </Col>
                </Col>

                {/* Testimonial Text */}
                <p className="text-grey mt-4 text-center">{testimonial.review}</p>
              </Carousel.Item>
            ))}
          </Carousel>

        </Col>


      </Row>
 
      </Container>


          <Footer/>

    </Box>
  );
}
