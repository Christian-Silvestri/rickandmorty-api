import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const [fetchData, setFetchData] = useState([]);
  const { name, image, location, origin, gender, species, status, type } = fetchData;
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json());
      setFetchData(data);
    })();
  }, [api])

  return (
    <div  className='container d-flex justify-content-center'>
      <div className=' d-flex flex-column gap-3'>
        <h1 className=' text-center'>
          {name}
        </h1>
        <img src={image} alt={name} className='img-fluid' />
        <div className={`badge1 badge fs-5  ${status === 'Alive' ? 'bg-success' : status === 'Dead' ? 'bg-danger' : 'bg-secondary'}`}>
          {status}
        </div>
        <div className='content'>
          <div>
            <span className=' fw-bold'>
              Gender: {gender}
            </span>
          </div>
          <div>
            <span className=' fw-bold'>
              Species: {species}
            </span>
          </div>
          <div>
            <span className=' fw-bold'>
              Type: {type ? type : 'Unkknow'}
            </span>
          </div>
          <div>
            <span className=' fw-bold'>
              Origin: {origin?.name}
            </span>
          </div>
          <div>
            <span className=' fw-bold'>
              Loaction: {location?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails