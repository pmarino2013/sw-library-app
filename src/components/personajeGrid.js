import React, { useState } from "react";

import { Form, Input, FormGroup } from "reactstrap";

const PersonajeGrid = ({ setPeople }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChance = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length >= 2) {
      setPeople(inputValue);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            value={inputValue}
            onChange={handleChance}
            onClick={handleClear}
          />
        </FormGroup>
      </Form>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChance} />
      </form> */}
    </div>
  );
};

export default PersonajeGrid;
