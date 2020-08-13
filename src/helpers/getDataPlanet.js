import axios from "axios";

export const getPlanet = async (planet) => {
  // const [datos, setDatos] = useState({});

  const data = await axios.get(planet);
  try {
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
