import { useState, useEffect } from 'react';
import request from '../MovieRequest';
import axios from 'axios';
import MovieSmall from './MovieSmall';

const Recommended = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(request.requestPopular).then(res => {
      setMovies(prev => (prev = res.data.results));
    });
  }, []);
  return (
    <div className="max-w-[450px] mx-auto">
      <h1 className="text-3xl my-7">Recommended for you</h1>
      <div className="grid grid-cols-2 gap-x-5">
        {movies.map((movie, id) => (
          <MovieSmall key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
