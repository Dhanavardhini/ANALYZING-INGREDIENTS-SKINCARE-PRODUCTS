import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

import './Footer.css'


function Footer() {
  return (
    <div >
      <Container fluid >
        <Row className='color-1 '>
        <Col xs={12} md={5} sm={6} lg={7} className=" mt-5 ps-5">
  <h1 className='head'> GLOW CENTER</h1>
  <p  className='para'>
    We want to help you pick better, safer, smarter skincare products 
    to build a simple, effective routine you’ll love.
  </p>

  {/* Contact Info with Icons */}
  <div className="contact-info">
    <p><BsGeoAlt className="me-2" /> L2S Street, Kumbakonam, Tamil Nadu.</p>
    <p><BsTelephone className="me-2" /> +91 6374 376 806</p>
    <p><BsEnvelope className="me-2" /> splendidl2s.com</p>
  </div>

  {/* Social Media Icons */}
  <div className="social-icons mb-3">
    <a href="#" className="icon"><BsTwitter /></a>
    <a href="#" className="icon"><BsFacebook /></a>
    <a href="#" className="icon"><BsLinkedin /></a>
    <a href="#" className="icon"><BsInstagram /></a>
  </div>
        </Col>

        <Col xs={12} sm={2} md={4} className="d-flex justify-content-between mt-5">
  {/* Quick Links Column */}
  <div>
    <h5 className="footer-heading">Quick Links</h5>
    <ul className="footer-list">
      <li><a href="/dashboard"> Home</a></li>
      <li><a href="/find-my-skin"> Find My Skin</a></li>
      <li><a href="/product-gallery">Product Gallery</a></li>
    </ul>
  </div>

  {/* Our Services Column */}
  <div>
    <h5 className="footer-heading">Our Services</h5>
    <ul className="footer-list">
      <li><a href="/dashboard"> Daily Routine</a></li>
      <li><a href="/find-my-skin"> Weekly Routine</a></li>
      <li><a href="/product-gallery">Face masking </a></li>

    </ul>
  </div>
</Col>

         
        </Row>
      </Container>
    </div>
  )
}

export default Footer
