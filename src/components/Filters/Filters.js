import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () => {
    setGender('');
    setSpecies('');
    setStatus('');
    setPageNumber(1);
  }

  return (
    <div className='col-lg-3 col-12 mb-5' >
      <div className='text-center fw-bold fs-4 mb-2'>
        Filter
      </div>
      <div
        style={{ cursor: 'pointer' }}
        className='text-primary text-center text-decoration-underline mb-4'
        onClick={clear}
      >
        Clear filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPagenumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters