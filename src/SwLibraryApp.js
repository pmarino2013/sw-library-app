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
            "Cargando..."
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
