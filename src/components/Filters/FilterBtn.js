import React from 'react'

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {

  const handleFilter = () => {
    setPageNumber(1);
    task(items)
  }
  return (
    <div>
      <div className="form-check">

        <input
          className="form-check-input check"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={handleFilter}
        />
        <label
          className="btn btn-outline-primary "
          htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  )
}

export default FilterBtn