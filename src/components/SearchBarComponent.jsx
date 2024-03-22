import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const SearchBarComponent = ({ onSubmit }) => {
  const [cityInputValue, setCityInputValue] = useState("");
  const [countryCodeInputValue, setCountryCodeInputValue] = useState("");

  const handleCityInput = (e) => {
    setCityInputValue(e.target.value);
  };

  const handleCountryInput = (e) => {
    setCountryCodeInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityInputValue, countryCodeInputValue);
  };

  return (
    <Row className="">
      <Col className="" xs={8} md={10} lg={12}>
        <p className="fs-4">search the name of the location...</p>
        <Form className="d-flex mb-5" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Location name"
            value={cityInputValue}
            onChange={handleCityInput}
            className="w-100 mr-sm-2"
          />
          <Button type="submit" variant="dark">
            <i class="bi bi-search"></i>
          </Button>
          {/* <Form.Control
            type="text"
            placeholder="Country Code"
            value={countryCodeInputValue}
            onChange={handleCountryInput}
            className="mr-sm-2"
          /> */}
        </Form>
      </Col>
    </Row>
  );
};

export default SearchBarComponent;
