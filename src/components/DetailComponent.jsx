import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import DaysComponent from "./DaysComponent";
import { Row, Col } from "react-bootstrap";

const DetailComponent = (props) => {
  const [detailWeather, setDetailWeather] = useState(null);

  const fetchDetailWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city},&APPID=f592bb1f055a6a224e93a8020d397bbb&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setDetailWeather(data);
      } else {
        throw new Error("Errore nella chiamata API");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetailWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    detailWeather && (
      <>
        <Row>
          <Col xs={10} lg={12}>
            <ListGroup className="my-1 mb-5">
              <ListGroup.Item className="bg-dark text-white fs-4">
                <p>{detailWeather.name}</p>
              </ListGroup.Item>
              {detailWeather.weather.map((e) => {
                return (
                  <ListGroup.Item key={e.id}>
                    {e.main} - {e.description}
                  </ListGroup.Item>
                );
              })}
              <ListGroup.Item>{detailWeather.main.temp} &deg;C</ListGroup.Item>
              <ListGroup.Item>Feels like: {detailWeather.main.feels_like}&deg;C</ListGroup.Item>
              <ListGroup.Item>Humidity: {detailWeather.main.humidity}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <DaysComponent city={props.city} />
      </>
    )
  );
};
export default DetailComponent;
