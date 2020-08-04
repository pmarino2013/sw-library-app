import React, { useState } from "react";

const PersonajeGrid = ({ setPeople }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChance = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
