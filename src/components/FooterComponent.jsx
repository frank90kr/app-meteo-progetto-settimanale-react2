import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col>
            <p className="text-white py-2">©2024 The Weather Cast</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
