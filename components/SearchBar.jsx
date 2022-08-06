import React, { useContext } from 'react';
import { MovieContext } from '../context/movies.context';

const SearchBar = () => {
  const { setSearchString } = useContext(MovieContext);
  const onInputChange = event => {
    const searchField = event.target.value.toLowerCase();
    setSearchString(searchField);
  };
  return (
    <input
      className="w-full bg-transparent text-xl "
      type="text"
      placeholder="Search for movies or TV series"
      onChange={onInputChange}
    />
  );
};

export default SearchBar;
