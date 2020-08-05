import React, { useState } from "react";

import { useGetAxios } from "./hooks/useGetAxios";
import PersonajeGrid from "./components/personajeGrid";
import GridItems from "./components/gridItems";

import Logo from "./img/logo2.png";
import { Container, Row, Col } from "reactstrap";

const SwLibraryApp = () => {
  const [people, setPeople] = useState("Skywalker");

  const { data, loading } = useGetAxios(people);

  return (
    <>
      <Container>
        {/* <h1>Datos de SW</h1> */}
        <Row>
          <Col id="logo" sm="12" md={{ size: 6, offset: 3 }}>
            <img src={Logo} alt="Logo starwars" />
            <h5>Library</h5>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <PersonajeGrid setPeople={setPeople} />
          </Col>

          {/* <PersonajeGrid setPeople={setPeople} /> */}
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="texto">
            {loading ? (
              <div id="floatingBarsG">
                <div className="blockG" id="rotateG_01"></div>
                <div className="blockG" id="rotateG_02"></div>
                <div className="blockG" id="rotateG_03"></div>
                <div className="blockG" id="rotateG_04"></div>
                <div className="blockG" id="rotateG_05"></div>
                <div className="blockG" id="rotateG_06"></div>
                <div className="blockG" id="rotateG_07"></div>
                <div className="blockG" id="rotateG_08"></div>
              </div>
            ) : (
              <ul>
                <GridItems datos={data} />
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SwLibraryApp;
