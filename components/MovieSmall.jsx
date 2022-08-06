import { useState, useContext } from 'react';
import { RiFilmFill } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { UserContext } from '../context/user.context';
import { updateMoviesDoc } from '../firebase';
import { SavedContext } from '../context/saved.context';

const MovieSmall = ({ movie }) => {
  const { currentUser } = useContext(UserContext);
  const [like, setLike] = useState(false);
  const { movieGenres } = useContext(SavedContext);

  const saveMovie = async () => {
    if (currentUser) {
      setLike(prev => !prev);
      await updateMoviesDoc(
        currentUser.uid,
        movie.id,
        movie.title,
        movie.backdrop_path,
        movie.release_date,
        movie.genre_ids,
        'Movie'
      );
    } else {
      alert('Please log in to bookmark movies');
    }
  };

  return (
    <div className="pb-5">
      <div className="inline-block cursor-pointer relative">
        <picture>
          <img
            className="mx-auto h-auto block rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            alt="/"
          />
        </picture>
        <div
          onClick={saveMovie}
          className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full"
        >
          {like ? <BsBookmarkFill /> : <BsBookmark />}
        </div>
      </div>
      <div>
        <p className="text-md flex items-center gap-x-1">
          {movie?.release_date.substring(0, 4)} •
          <span>
            <RiFilmFill />
          </span>
          Movie • {movieGenres[0]?.[movie.genre_ids[0]]}
        </p>
        <p className=" text-xl">{movie?.title}</p>
      </div>
    </div>
  );
};

export default MovieSmall;
