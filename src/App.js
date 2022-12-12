import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Card/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';



function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json());
      setFetchData(data);
    })();
  }, [api])


  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4'>
        Rick&Morty
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber}  />
    </div>
  );
}

export default App;
