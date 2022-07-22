import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Movies = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">Movies</h1>
        <div className="grid grid-cols-2 gap-x-5"></div>
      </div>
    </div>
  );
};

export default Movies;
