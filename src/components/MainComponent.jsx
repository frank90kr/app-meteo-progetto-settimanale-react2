import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MainComponent = ({ city, countryCode }) => {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=f592bb1f055a6a224e93a8020d397bbb&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error("Errore nella chiamata API");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    weather && (
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={8}>
            <Card className="city-card border border-5">
              <Card.Body>
                <Card.Title className="card-body">
                  <p>
                    {weather.name} - {weather.sys.country} -
                  </p>
                </Card.Title>

                {weather.weather.map((e) => {
                  return <Card.Text key={e.id}>{e.main}</Card.Text>;
                })}
                <Button className="w-25" variant="dark" onClick={() => navigate("/detail")}>
                  Next days
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default MainComponent;
