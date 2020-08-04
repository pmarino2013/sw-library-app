import axios from "axios";

export const getPeople = async (people) => {
  // const [datos, setDatos] = useState({});

  const data = await axios.get(
    `https://swapi.dev/api/people/?search=${encodeURI(people)}`
  );
  try {
    // console.log(data.data);
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};
