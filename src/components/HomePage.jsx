import React from "react";
import { Button, Card, CardGroup, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import storeImage from "../images/store.jpg";
import itImage from "../images/it.jpg";
import kitchenImage from "../images/kitchen.jpg";
import toyImage from "../images/toy.jpg"
import "../Style.css"

const HomePage = () => {
    return (
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
        <h1 className="mb-5">Welcome to the Corner Store</h1>
        <h3>Online Shop!</h3>
        
        <Image 
          src={storeImage} 
          alt="Welcome" 
          fluid 
          className="mb-4 rounded"
          border="2px solid #ddd"
        />
  
        <div className="mt-4">
          <CardGroup>
            <Card className="card" style={{ width: '18rem', margin: '10px'}}>
                <Card.Img variant="top" src={itImage} />
                <Card.Body>
                <Card.Title>IT Products</Card.Title>
                <Card.Text>
                    Check out our IT products!
                </Card.Text>
                <Button href="/products-page" variant="secondary">IT Products</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={kitchenImage} />
                <Card.Body>
                <Card.Title>Kitchen Products</Card.Title>
                <Card.Text>
                    Check out our kitchen products!
                </Card.Text>
                <Button href="/products-page" variant="secondary">Kitchen Products</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={toyImage} />
                <Card.Body>
                <Card.Title>Techy Toys</Card.Title>
                <Card.Text>
                    Check out our techy toys!
                </Card.Text>
                <Button href="/products-page" variant="secondary">Techy Toys</Button>
                </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="d-grid gap-2">
            <Button href="/products-page" variant="primary" size="lg" className="btn shadow-lg mb-4 mt-5">Shop Now</Button>
        </div>
      </div>
    );
  };
  
  export default HomePage;