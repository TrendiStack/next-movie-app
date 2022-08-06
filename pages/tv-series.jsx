import { useState, useEffect } from 'react';
import request from '../MovieRequest';
import axios from 'axios';
import MovieSmall from '../components/MovieSmall';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import SeriesSmall from '../components/SeriesSmall';

const Tvseries = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get(request.requestSeries).then(res => {
      setSeries(prev => (prev = res.data.results));
    });
  }, []);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">TV Series </h1>
        <div className="grid grid-cols-2 gap-x-5">
          {series.map((show, id) => (
            <SeriesSmall key={id} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tvseries;
