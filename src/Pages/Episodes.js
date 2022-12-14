import React, { useState, useEffect } from 'react'
import Cards from '../components/Card/Cards';
import InputGroup from '../components/Filters/InputGroup';

const Episodes = () => {
  const [fetchData, setFetchData] = useState([]);
  const [id, setID] = useState(1);
  const [results, setResults] = useState([]);
  const { air_date, name } = fetchData;
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json())
      setFetchData(data);

      const episodeCharacter = await Promise.all(data.characters.map((character) => {
        return fetch(character).then((res) => res.json());
      }))
      setResults(episodeCharacter);

    })();
  }, [api])


  return (
    <div className=' container'>
      <div className=' row g-2 mb-2'>
        <h1 className=' text-center'>
          Episode: <span className=' text-primary'>{name ?? 'Unknown'}</span>
        </h1>
        <h5 className=' text-center'>
          Air Date {air_date ?? 'Unkknow'}
        </h5>
      </div>
      <div className=' row'>
        <div className=' col-lg-3 col-12'>
          <h4 className=' text-center'>
            Pick Episode
            <InputGroup name='Episode' setID={setID} totalEpisode={51} />
          </h4>
        </div>
        <div className=' col-lg-8 col-12'>
          <div className=' row'>
            <Cards page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes