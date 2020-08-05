import React, { useState } from "react";

import { useGetAxios } from "./hooks/useGetAxios";
import PersonajeGrid from "./components/personajeGrid";
import GridItems from "./components/gridItems";

import { Container, Row, Col } from "reactstrap";

const SwLibraryApp = () => {
  const [people, setPeople] = useState("Skywalker");

  const { data, loading } = useGetAxios(people);

  return (
    <>
      <Container>
        <h1>Datos de SW</h1>
        <Row>
          <PersonajeGrid setPeople={setPeople} />
        </Row>
        <Row>
          {loading ? (
            <div id="floatingBarsG">
              <div class="blockG" id="rotateG_01"></div>
              <div class="blockG" id="rotateG_02"></div>
              <div class="blockG" id="rotateG_03"></div>
              <div class="blockG" id="rotateG_04"></div>
              <div class="blockG" id="rotateG_05"></div>
              <div class="blockG" id="rotateG_06"></div>
              <div class="blockG" id="rotateG_07"></div>
              <div class="blockG" id="rotateG_08"></div>
            </div>
          ) : (
            <ul>
              <GridItems datos={data} />
            </ul>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SwLibraryApp;
