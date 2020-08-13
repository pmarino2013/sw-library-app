import React, { useState, useEffect } from "react";
import { getPlanet } from "../helpers/getDataPlanet";
import ToglePlanet from "./toglePlanet";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

export default function GridItems({ datos }) {
  const [planet, setPlanet] = useState("");
  const [dataPlanet, setDataPlanet] = useState([]);

  useEffect(() => {
    if (planet) {
      getPlanet(planet).then((data) => {
        setDataPlanet(data);
        console.log(data);
      });
    }
  }, [planet]);

  return (
    <>
      {datos.length > 0 ? (
        datos.map((item) => (
          <li key={item.name}>
            <Card body id="card">
              <CardTitle>
                <h3>{item.name}</h3>
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>

              <ToglePlanet
                setPlanet={setPlanet}
                planeta={item.homeworld}
                dataPlanet={dataPlanet}
              />
            </Card>
          </li>
        ))
      ) : (
        <h1>No hay datos</h1>
      )}
    </>
  );
}
