import React, { useState, useEffect } from "react";

import { getPeople } from "../helpers/getDataPeople";

const PersonajeGrid = ({ setDatos, setLoader }) => {
  const [people, setPeople] = useState("Skywalker");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getPeople(people).then((data) => {
      setDatos(data);
      setLoader(false);
    });
  }, [people]);

  const handleChance = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDatos([]);
    setLoader(true);

    if (inputValue.length >= 2) {
      setPeople(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChance} />
      </form>
    </div>
  );
};

export default PersonajeGrid;
