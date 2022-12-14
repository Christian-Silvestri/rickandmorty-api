import React from 'react';
import styles from './search.scss';

const Search = ({ setSearch, setPageNumber }) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  }

  return (
    <form className=' d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
      <input 
      type='text' 
      className='input' 
      placeholder='Search for character' 
      onChange={handleSearch}
       />
      <button 
      className='btn btn-primary fs-5 btn-search'
      onClick={(e) => e.preventDefault()}>
        Search
      </button>
    </form>

  )
}

export default Search