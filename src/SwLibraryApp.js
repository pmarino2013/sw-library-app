import React, { useState } from "react";

import { useGetAxios } from "./hooks/useGetAxios";
import PersonajeGrid from "./components/personajeGrid";
import GridItems from "./components/gridItems";

const SwLibraryApp = () => {
  const [people, setPeople] = useState("Skywalker");

  const { data, loading } = useGetAxios(people);

  return (
    <>
      <h1>Datos de SW</h1>

      <PersonajeGrid setPeople={setPeople} />

      {loading ? "Cargando..." : <GridItems datos={data} />}
    </>
  );
};

export default SwLibraryApp;
