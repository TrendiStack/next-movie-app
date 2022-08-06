import { useState, useEffect } from 'react';
import axios from 'axios';
import request from '../MovieRequest';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Recommended from '../components/Recommended';
import MovieSmall from '../components/MovieSmall';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(request.requestTopRated).then(res => {
      setMovies(prev => (prev = res.data.results));
    });
  }, []);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">Movies</h1>
        <div className="grid grid-cols-2 gap-x-5">
          {movies.map((movie, id) => (
            <MovieSmall key={id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
