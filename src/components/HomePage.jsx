import React from "react";
import { Button, Card, CardGroup, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style.css"

const HomePage = () => {
    return (
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', border: '2px solid #ddd', borderRadius: '8px' }}>
        <h1 style={{ color: '#343a40' }}>Welcome to Our Store</h1>
        
        {/* Responsive Image */}
        <Image 
          src="/assets/welcome-image.jpg" 
          alt="Welcome" 
          fluid 
          className="mb-4" 
        />
  
        <div className="mt-4">
          <CardGroup>
            <Card className="card" style={{ width: '18rem', margin: '10px'}}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                <Card.Title>Featured Product</Card.Title>
                <Card.Text>
                    Check out our latest product collection!
                </Card.Text>
                <Button variant="secondary">View Product</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                <Card.Title>Featured Product</Card.Title>
                <Card.Text>
                    Check out our latest product collection!
                </Card.Text>
                <Button variant="secondary">View Product</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                <Card.Title>Featured Product</Card.Title>
                <Card.Text>
                    Check out our latest product collection!
                </Card.Text>
                <Button variant="secondary">View Product</Button>
                </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="btn shadow-lg mb-4 mt-5">Shop Now</Button>
        </div>
      </div>
    );
  };
  
  export default HomePage;