import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './MyComponents/searchbutton.svg'
import MovieCard from './MyComponents/MovieCard.jsx'

//API key c28ce1f2

const API_URL = 'http://www.omdbapi.com?apikey=c28ce1f2';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle]=useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(` ${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }


  useEffect(() => {

    searchMovies('superman');
  }, []);

  return (

    <div className='app'>

      <h1>Movie Hub</h1>

      <div className='search'>

        <input
          placeholder='Search for Movies'
          value={searchTitle}
          onChange={(e) => {setSearchTitle(e.target.value)}}
        />
        <img src={SearchIcon} alt="search"
          onClick={() => {searchMovies(searchTitle) }}

        />
      </div>



      {
        movies?.length > 0 ? (
          <div className='container'>

            {
              movies.map( (movie)=> (
            <MovieCard movie={movie} />
            ))
            }

          </div>

        ) : (

          <div className='empty'>

            <h2>No movies found</h2>
          </div>
        )
      }



    </div>
  );

}
export default App;