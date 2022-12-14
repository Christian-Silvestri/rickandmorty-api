import React, { useState, useEffect } from 'react'
import Cards from '../components/Card/Cards';
import InputGroup from '../components/Filters/InputGroup';

const Locations = () => {
  const [fetchData, setFetchData] = useState([]);
  const [id, setID] = useState(1);
  const [results, setResults] = useState([]);
  const { type, name, dimension } = fetchData;
  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json())
      setFetchData(data);

      const residentLocation = await Promise.all(data.residents.map((character) => {
        return fetch(character).then((res) => res.json());
      }))
      setResults(residentLocation);

    })();
  }, [api])


  return (
    <div className=' container'>
      <div className=' row g-2 mb-2'>
        <h1 className=' text-center'>
          Location: <span className=' text-primary'>{name ?? 'Unknown'}</span>
        </h1>
        <h5 className=' text-center'>
          Dimension: {dimension ?? 'Unkknow'}
        </h5>
        <h6 className=' text-center'>
          Type: {type ?? 'Unkknow'}
        </h6>
      </div>
      <div className=' row'>
        <div className=' col-lg-3 col-12'>
          <h4 className=' text-center'>
            Pick Location
            <InputGroup name='Location'  setID={setID} totalEpisode={126} />
          </h4>
        </div>
        <div className=' col-lg-8 col-12'>
          <div className=' row'>
            <Cards  page='/locations/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations