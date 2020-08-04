import React, { useState } from "react";
import PersonajeGrid from "./components/personajeGrid";
import GridItems from "./components/gridItems";

const SwLibraryApp = () => {
  const [datos, setDatos] = useState([]);
  const [loader, setLoader] = useState(false);

  return (
    <>
      <h1>Datos de SW</h1>

      <PersonajeGrid setDatos={setDatos} setLoader={setLoader} />

      {loader ? "Cargando..." : <GridItems datos={datos} />}
    </>
  );
};

export default SwLibraryApp;
