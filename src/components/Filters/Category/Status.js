import React from 'react'
import FilterBtn from '../FilterBtn'

const Status = ({ setStatus, setPagenumber }) => {
  const status = ['Alive', 'Dead', 'Unknown']

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn 
            key={index} 
            name='status' 
            index={index} 
            items={items} 
            task={setStatus}
            setPageNumber={setPagenumber}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status