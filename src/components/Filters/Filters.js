import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>
        Filter
      </div>
      <div style={{ cursor: 'pointer' }} className='text-primary text-center text-decoration-underline mb-4'>
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