import { useState, useEffect } from "react";
import { getPlanet } from "../helpers/getDataPlanet";

export const useGetPlanet = (planet) => {
  const [estado, setEstado] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (planet) {
      setEstado({ loading: true });
      getPlanet(planet).then((data) => {
        setEstado({
          data: data,
          loading: false,
        });
      });
    }
  }, [planet]);

  //   useEffect(() => {
  //     setEstado({ loading: true });
  //     getPlanet(planet).then((data) => {
  //       setEstado({
  //         data: data,
  //         loading: false,
  //       });
  //     });
  //   }, [planet]);

  return console.log(estado);
};
