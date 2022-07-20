import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="max-w-[450px] mx-auto mt-8">
      <div className="flex items-center">
        <div className="mr-4 text-2xl">
          <FiSearch />
        </div>
        <div className="w-full">
          <input
            className="w-full bg-transparent text-xl "
            type="text"
            placeholder="Search for movies or TV series"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
