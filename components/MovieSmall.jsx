import { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import axios from 'axios';
import { RiFilmFill, RiTvFill } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const MovieSmall = ({ movie, test }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [seriesGenres, setSeriesGenres] = useState([]);
  useEffect(() => {
    const getMovieGenres = () => {
      axios.get('http://localhost:3000/api/movie-genres').then(res => {
        setMovieGenres(prev => (prev = res.data));
      });
    };
    const getSeriesGenres = () => {
      axios.get('http://localhost:3000/api/series-genres').then(res => {
        setSeriesGenres(prev => (prev = res.data));
      });
    };
    getMovieGenres();
    getSeriesGenres();
  }, []);

  return (
    <div className="pb-5">
      <div className="inline-block cursor-pointer relative">
        <Image
          className="w-full h-auto block rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt="/"
          width={265}
          height={165}
        />
        <div className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full">
          <BsBookmark />
        </div>
      </div>
      <div>
        <p className="text-md flex items-center gap-x-1">
          {movie?.release_date
            ? movie?.release_date.substring(0, 4)
            : movie?.first_air_date.substring(0, 4)}{' '}
          •
          <span>
            <RiFilmFill />
          </span>
          Series •{' '}
          {test
            ? movieGenres[0]?.[movie.genre_ids[0]]
            : seriesGenres[0]?.[movie.genre_ids[0]]}
        </p>
        <p className=" text-xl">{movie?.title}</p>
      </div>
    </div>
  );
};

export default MovieSmall;
