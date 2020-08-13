import React, { useState } from "react";

import { Collapse, Button, CardBody, Card } from "reactstrap";

const ToglePlanet = ({ setPlanet, planeta, dataPlanet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setPlanet(planeta);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button color="success" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {isOpen ? "Planet Close" : "Planet View"}
      </Button>
      <Collapse isOpen={isOpen} id="colapse">
        <Card>
          <CardBody>
            <h3>
              {dataPlanet.name === "unknown" ? "Desconocido" : dataPlanet.name}
            </h3>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default ToglePlanet;
