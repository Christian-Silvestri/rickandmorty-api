import React from 'react';
import styles from './card.scss';


const Cards = ({results}) => {
  let display;

  if(results) {
    display = results.map((character) => {
      const { id, name, image, location, status } = character;
      return (
        <div key={id} className='col-4 mb-4 position-relative'>
          <div className='cards'>
            <img src={image} alt={name} className='img-fluid img' />
            <div className='content p-2'>
              <div className='fs-4 fw-bold mb-4'>
                {name}
              </div>
              <div>
                <div className='fs-6'>
                  Last location
                </div>
                <div className='fs-5'>
                  {location.name}
                </div>
                
              </div>
            </div>
          </div>
          <div className={`badge1 badge position-absolute ${status === 'Alive' ? 'bg-success' : status === 'Dead' ? 'bg-danger' : 'bg-secondary'}`}>
            {status}
          </div>
        </div>
      )
    })
  } else {
    display = 'No character found';
  }
  return (
    <>{display}</>
  )
}

export default Cards