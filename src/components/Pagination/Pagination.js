import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {

  /*  let next = () => {
     setPageNumber((curr) => curr + 1);
   };
 
   let prev = () => {
     setPageNumber((curr) => curr - 1)
   }; */

  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1)
  }


  return (

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
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'} />


  )
}

export default Pagination;
