import {useState, useEffect} from 'react'
import {getPeople} from '../helpers/getDataPeople'

export const useGetAxios=(people)=>{
const [estado, setEstado] = useState(
    {
        data:[],
        loading:true
    }
)

useEffect(() => {
    getPeople(people).then((data) => {
      setEstado({
          data=data,
          loading=false
      })
    });
  }, [people]);

return estado;
}
