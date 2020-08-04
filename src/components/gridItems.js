import React from "react";

export default function GridItems({ datos }) {
  return (
    <>
      {datos.length > 0 ? (
        datos.map((item) => <p key={item.name}>{item.name}</p>)
      ) : (
        <h1>No hay datos</h1>
      )}
    </>
  );
}
