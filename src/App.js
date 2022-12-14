import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Card/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './components/Card/CardDetails';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api)
        .then((res) => res.json());
      setFetchData(data);
    })();
  }, [api])


  return (
    <div className="App">
      <h1 className=' text-center'>Characters</h1>

      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className='container'>
        <div className='row'>
          <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies} />
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Cards page='/' results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
    </div>
  );
}

export default App;
