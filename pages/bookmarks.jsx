import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useContext, useState } from 'react';
import { SavedContext } from '../context/saved.context';
import BookmarkedMovies from '../components/bookmarks/bookmarked-movies/BookmarkedMovies';
import BookmarkedSeries from '../components/bookmarks/bookmarked-series/BookmarkedSeries';
import { deleteShowFromDoc } from '../firebase';
import { UserContext } from '../context/user.context';

const Bookmarks = () => {
  const [moviesTab, setMoviesTab] = useState(true);
  const [seriesTab, setSeriesTab] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { savedMovies, savedSeries, movieGenres, seriesGenres } =
    useContext(SavedContext);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">Bookmarks</h1>
        <div className="flex text-2xl justify-between mx-7 mb-9">
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
        <div className="grid grid-cols-2 gap-x-5">
          {moviesTab
            ? savedMovies.map(movie => (
                <BookmarkedMovies
                  key={movie.id}
                  movie={movie}
                  genres={movieGenres}
                />
              ))
            : savedSeries.map(show => (
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
