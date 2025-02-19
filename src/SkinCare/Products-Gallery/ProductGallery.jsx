import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ProductGallery.css"; // Add styles if needed
import product1 from "../../assets/Product1-bg.png";
import product2 from "../../assets/Product2-bg.png";
import product3 from "../../assets/Product3-bg.png";
import product4 from "../../assets/Product4-bg.png";
import product5 from "../../assets/Product5-bg.png";
import product6 from "../../assets/Product6-bg.png";
import product7 from "../../assets/Product7-bg.png";
import product8 from "../../assets/Product8-bg.png";
import product9 from "../../assets/Product9-bg.png";
import product10 from "../../assets/Product10-bg.png";
import product11 from "../../assets/Product11-bg.png";
import product12 from "../../assets/Product12-bg.png";
import product13 from "../../assets/Product13-bg.png";
import product14 from "../../assets/Product14-bg.png";
import product15 from "../../assets/Product15-bg.png";
import product16 from "../../assets/Product16-bg.png";
import product17 from "../../assets/Product17-bg.png";
import product18 from "../../assets/Product18-bg.png";
import product19 from "../../assets/Product19-bg.png";
import product20 from "../../assets/Product20-bg.png";
import product21 from "../../assets/Product21-bg.png";
import product22 from "../../assets/Product22-bg.png";
import product23 from "../../assets/Product23-bg.png";
import product24 from "../../assets/Product24-bg.png";
import product25 from "../../assets/Product25-bg.png";
import product26 from "../../assets/Product26-bg.png";
import product27 from "../../assets/Product27-bg.png";
import product28 from "../../assets/Product28-bg.png";
import Footer from "../Dashboard/Home/Footer";

// Sample Product Data
const productData = [
  { id: 1, title: "DERMA Co", image: product1, sub: "2% Salicylic Acid" },
  { id: 2, title: "DOT AND KEY", image: product2, sub: "Spot treatment" },
  { id: 3, title: "MINIMALIST", image: product3, sub: "Niacinamide 10%" },
  { id: 4, title: "DOT & KEY", image:product4, sub: "2% Salicylic Acid + CicaAnti AcneSerum with Zinc." },
  { id: 5, title: "DERMA co", image: product5, sub: "Retinol & Peptide" },
  { id: 6, title: "MINIMALIST", image: product6, sub: "Vitamin K + Retinol 01%" },
  { id: 7, title: "FOXTALE", image:product7, sub: "Firming Eye Gel" },
  { id: 8, title: "DOT & KEY", image:product8, sub: "Pomegranate + Retinol Eye Cream" },
  { id: 9, title: "DERMA co", image: product9, sub: "1% Kojic Acid Lip Balm" },
  { id: 10, title: "MINIMALIST", image: product10, sub: "L-Ascorbic Acid 8% Lip Treatment Balm" },
  { id: 11, title: "DOT & KEY", image: product11, sub: "Lip Sugar Scrub" },
  { id: 12, title: "MAMAEARTH", image: product12, sub: "Natural Lip Balm with Vitamin E and Strawberry" },
  { id: 13, title: "BUDDHA", image: product13, sub: "Dark Spot Removal Cream" },
  { id: 14, title: "DERMACO", image: product14, sub: "3% Kojic Acid Dark Spot Corrector Gel with Azelaic & Tranexamic Acid" },
  { id: 15, title: "HIMALAYA", image: product15, sub: "Dark Spot Clearing Cream" },
  { id: 16, title: "PLUM", image: product16, sub: "5% Niaccinamide with rice wate" },
  { id: 17, title: "PLUM", image: product17, sub: "E-Luminence Deep Moisturizing Creme" },
  { id: 18, title: "DR.SHETH", image: product18, sub: "Kesar & Kojic Daily Pigmentation Correction Cream" },
  { id: 19, title: "DERMA co", image: product19, sub: "1% Kojic Acid Face Wash with Niacinamide"},
  { id: 20, title: "DOT & KEY", image: product20, sub: "20% Vitamin C Serum with Blood Orange" },
  { id: 21, title: "MAMAEARTH", image: product21, sub: "Rosehip & Niacinamide For Pore Tightening" },
  { id: 22, title: "DERMACO", image: product22, sub: "AHA and BHA" },
  { id: 23, title: "DERMA co", image: product23, sub: "Pore Minimizing Clay Face Wash" },
  { id: 24, title: "DOT & KEY", image: product24, sub: "Deep Pore Foaming Face Wash" },
  { id: 25, title: "FOXTALE", image: product25, sub: "Retinol Night Serum" },
  { id: 26, title: "PILGRIM", image: product26, sub: "Vitamin C & Hyaluronic Acid" },
  { id: 27, title: "DERMA co", image: product27, sub: "V1% Salicylic + Hyaluronic Night Repair Face Serum" },
  { id: 28, title: "m Caffeine", image: product28, sub: "Anti - ageing Night Cream" },
];

function ProductGallery() {
  return (
    <div>
    <Container fluid className="mt-5">
      <h2 className="text-center">Our Product Gallery</h2>
      <Row>
        {productData.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
          <Card className="product-card">
            <div
                className="product-image-bg"
                style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <Card.Body className="text-center card-body-red">
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Subtitle className="product-sub">{product.sub}</Card.Subtitle>
            </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
      
    </Container>

    <Footer/>
    </div>
  );
}

export default ProductGallery;
