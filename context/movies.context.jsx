import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import request from '../MovieRequest';

import {} from '../firebase';
import { SavedContext } from './saved.context';

export const MovieContext = createContext({
  popular: [],
  topRated: [],
  series: [],
  bookmarkMovies: [],
  bookmarkSeries: [],
  searchString: '',
  filterPopular: [],
  filterTopRated: [],
  filterSeries: [],
  filterBookmarkSeries: [],
  filterBookmarkMovies: [],
  setpPopular: () => {},
  setTopRated: () => {},
  setSeries: () => {},
  setBookmarkMovies: () => {},
  setBookmarkSeries: () => {},
  setSearchString: () => {},
});

export const MovieProvider = ({ children }) => {
  const { savedMovies, savedSeries } = useContext(SavedContext);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);
  const [bookmarkMovies, setBookmarkMovies] = useState([]);
  const [bookmarkSeries, setBookmarkSeries] = useState([]);
  const [searchString, setSearchString] = useState('');

  const filterPopular = popular.filter(movie => {
    return movie.title.toLowerCase().includes(searchString);
  });
  const filterTopRated = topRated.filter(movie => {
    return movie.title.toLowerCase().includes(searchString);
  });
  const filterSeries = series.filter(movie => {
    return movie.name.toLowerCase().includes(searchString);
  });

  const filterBookmarkMovies = bookmarkMovies.filter(movie => {
    return movie.title.toLowerCase().includes(searchString);
  });

  const filterBookmarkSeries = bookmarkSeries.filter(movie => {
    return movie.title.toLowerCase().includes(searchString);
  });

  useEffect(() => {
    axios.get(request.requestPopular).then(res => {
      setPopular(prev => (prev = res.data.results));
    });
    axios.get(request.requestTopRated).then(res => {
      setTopRated(prev => (prev = res.data.results));
    });
    axios.get(request.requestSeries).then(res => {
      setSeries(prev => (prev = res.data.results));
    });
    setBookmarkMovies(prev => (prev = savedMovies));
    setBookmarkSeries(prev => (prev = savedSeries));
  }, [savedMovies, savedSeries]);
  const value = {
    popular,
    topRated,
    series,
    bookmarkMovies,
    bookmarkSeries,
    filterPopular,
    filterTopRated,
    filterSeries,
    filterBookmarkMovies,
    filterBookmarkSeries,
    searchString,
    setPopular,
    setTopRated,
    setBookmarkMovies,
    setBookmarkSeries,
    setSearchString,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
