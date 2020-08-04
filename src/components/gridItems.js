import React from "react";

export default function GridItems({ datos }) {
  return (
    <>
      {datos.length > 0 ? (
        datos.map((item) => <li key={item.name}>{item.name}</li>)
      ) : (
        <h1>No hay datos</h1>
      )}
    </>
  );
}
