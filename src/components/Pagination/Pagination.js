import React from 'react'

const Pagination = ({ setPageNumber, pageNumber }) => {

  let next = () => {
    setPageNumber((curr) => curr + 1);
  };

  let prev = () => {
    setPageNumber((curr) => curr - 1)
  };

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
      {pageNumber !== 1 && (
        <button onClick={prev} className='btn btn-primary'>
          Prev
        </button>
      )}
      <button onClick={next} className='btn btn-primary'>
        Next
      </button>
    </div>
  )
}

export default Pagination;
