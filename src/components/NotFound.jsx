import React from "react";
import { Container, Row, Col, Image, Button, NavLink } from 'react-bootstrap';
import errorImage from "../images/error.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="d-flex justify-content-center pt-5 mt-5 align-items-center vh-200 bg-light">
      <Row className="text-center w-150">
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src={errorImage} 
            alt="404 Error"
            fluid
            style={{ maxWidth: '800px', marginBottom: "80px" }}
          />
        </Col>
        <Col md={6}>
          <h1 className="text-danger">404 - Page Not Found</h1>
          <p className="text-muted mb-4">
            Oops! The page you're looking for doesn't exist. <br />But don't worry, we'll help you find your way back home.
          </p>
          <Button variant="secondary" as={NavLink} href="/" className="text-dark px-4 py-2">
            Go Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;