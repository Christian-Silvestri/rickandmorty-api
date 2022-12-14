import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  const [width, setWidth] = useState(window.innerWidth)

  const updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, [])

  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1)
  }


  return (
    <>
      <ReactPaginate
        className='pagination justify-content-center gap-4 my-4'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel='Next'
        previousLabel='Back'
        pageCount={info?.pages}
        onPageChange={handlePageChange}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'} 
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        />

    </>
  )
}

export default Pagination;
