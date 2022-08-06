import { useState, useEffect, useContext } from 'react';
import request from '../MovieRequest';
import axios from 'axios';
import MovieSmall from '../components/MovieSmall';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import SeriesSmall from '../components/SeriesSmall';
import { MovieContext } from '../context/movies.context';
import { FiSearch } from 'react-icons/fi';

const Tvseries = () => {
  const { filterSeries } = useContext(MovieContext);

  return (
    <div>
      <Navbar />
      <div className="max-w-[450px] mx-auto mt-8">
        <div className="flex items-center">
          <div className="mr-4 text-2xl">
            <FiSearch />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">TV Series </h1>
        <div className="grid grid-cols-2 gap-x-5">
          {filterSeries.map((show, id) => (
            <SeriesSmall key={id} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tvseries;
