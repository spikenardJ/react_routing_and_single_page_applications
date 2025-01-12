import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import laptopImage from "../images/laptop.png";
import iphoneImage from "../images/iphone.png";
import ipadImage from "../images/ipad.png";
import potsImage from "../images/pots.png";
import utensilsImage from "../images/utensils.png";
import bowlsImage from "../images/bowls.png";
import hoverImage from "../images/hover.png";
import robotsImage from "../images/robots.png";
import droneImage from "../images/drone.png";

function ProductsPage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (

        <div>
        
        <Container style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
            <Row>
                <h3 className="it-products">IT Products</h3>
                <Col xs={8} md={4}>
                    <Image 
                        src={laptopImage} 
                        alt="Welcome" 
                        className="mb-4 rounded" 
                        width="100%"
                        border="2px solid #ddd"
                    />
                    <p><small>Macbook Laptop: $1500.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                    <Image 
                        src={iphoneImage} 
                        alt="Welcome" 
                        className="mb-4 rounded" 
                        width="100%"
                        border="2px solid #ddd"
                    />
                    <p><small>iPhone: $800.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                    <Image 
                        src={ipadImage} 
                        alt="Welcome" 
                        className="mb-4 rounded"
                        width="100%"
                        border="2px solid #ddd" 
                    />
                    <p><small>iPad: $400.00</small></p>
                </Col>
            </Row>
        </Container>
        
        <br /><br /><br />
        <Container style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
            <Row>
            <h3 className="kitchen-products">Kitchen Products</h3>
                <Col xs={8} md={4}>
                <Image 
                        src={potsImage} 
                        alt="Welcome" 
                        className="mb-4 rounded"
                        width="100%"
                        border="2px solid #ddd" 
                    />
                    <p><small>Copper Pot Set: $1200.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                <Image 
                        src={utensilsImage} 
                        alt="Welcome" 
                        className="mb-4 rounded"
                        width="100%"
                        border="2px solid #ddd" 
                    />
                    <p><small>Teak Utensil Set: $40.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                <Image 
                        src={bowlsImage} 
                        alt="Welcome" 
                        className="mb-4 rounded"
                        width="100%"
                        border="2px solid #ddd" 
                    />
                    <p><small>Bowl Set (4): $30.00</small></p>
                </Col>
            </Row>
        </Container>
        <br /><br /><br />
        <Container style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
            <Row>
            <h3 className="techy-toys">Techy Toys</h3>
                <Col xs={8} md={4}>
                <Image 
                        src={hoverImage} 
                        alt="Welcome" 
                        className="mb-4 rounded" 
                        width="100%"
                        border="2px solid #ddd"
                    />
                    <p><small>iPhone: $800.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                <Image 
                        src={robotsImage} 
                        alt="Welcome" 
                        className="mb-4 rounded" 
                        width="100%"
                        border="2px solid #ddd"
                    />
                    <p><small>iPhone: $800.00</small></p>
                </Col>
                <Col xs={8} md={4}>
                <Image 
                        src={droneImage} 
                        alt="Welcome" 
                        className="mb-4 rounded" 
                        width="100%"
                        border="2px solid #ddd"
                    />
                    <p><small>iPhone: $800.00</small></p>
                </Col>
            </Row>
        </Container>
        <br />
            <div className="d-grid gap-2">
                <Button href="#"variant="secondary" size="lg" className="btn shadow-lg mb-4 mt-5">Shop Now</Button>
            </div>
        </div>
    );

}


export default ProductsPage;