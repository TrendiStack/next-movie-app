import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useContext, useState } from 'react';
import { SavedContext } from '../context/saved.context';
import BookmarkedMovies from '../components/bookmarks/bookmarked-movies/BookmarkedMovies';
import BookmarkedSeries from '../components/bookmarks/bookmarked-series/BookmarkedSeries';
import { FiSearch } from 'react-icons/fi';
import { MovieContext } from '../context/movies.context';

const Bookmarks = () => {
  const [moviesTab, setMoviesTab] = useState(true);
  const [seriesTab, setSeriesTab] = useState(false);
  const { savedMovies, savedSeries, movieGenres, seriesGenres } =
    useContext(SavedContext);
  const { filterBookmarkMovies, filterBookmarkSeries } =
    useContext(MovieContext);

  return (
    <div className="md:ml-24">
      <Navbar />
      <div className="max-w-[450px] md:max-w-full mx-auto mt-8">
        <div className="flex items-center">
          <div className="mr-4 text-2xl">
            <FiSearch />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="max-w-[450px] md:max-w-full mx-auto">
        <h1 className="text-3xl my-7">Bookmarks</h1>
        <div className="flex text-2xl justify-between md:justify-around mx-7 mb-9">
          <h2
            onClick={() => {
              setMoviesTab(prev => (prev = true));
              setSeriesTab(prev => (prev = false));
            }}
            className="cursor-pointer rounded bg-[#FC4747] px-4 py-2"
          >
            Movies
          </h2>
          <h2
            onClick={() => {
              setMoviesTab(prev => (prev = false));
              setSeriesTab(prev => (prev = true));
            }}
            className="cursor-pointer rounded bg-[#FC4747] px-4 py-2"
          >
            TV - Series
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5">
          {moviesTab
            ? filterBookmarkMovies.map(movie => (
                <BookmarkedMovies
                  key={movie.id}
                  movie={movie}
                  genres={movieGenres}
                />
              ))
            : filterBookmarkSeries.map(show => (
                <BookmarkedSeries
                  key={show.id}
                  show={show}
                  genres={seriesGenres}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
