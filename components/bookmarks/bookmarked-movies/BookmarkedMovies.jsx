import Image from 'next/dist/client/image';
import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';
import { SavedContext } from '../../../context/saved.context';
import { UserContext } from '../../../context/user.context';
import { deleteMovieFromDoc } from '../../../firebase';

const BookmarkedMovies = ({ movie, genres }) => {
  const { title, img, type, genre } = movie;
  const { currentUser } = useContext(UserContext);
  const { savedSeries } = useContext(SavedContext);

  const deletee = async id => {
    const result = savedSeries.filter(show => show.id !== id);
    try {
      await deleteMovieFromDoc(currentUser.uid, result);
      console.log('filter', result, 'unfiltered', savedSeries);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pb-5">
      <div className="inline-block cursor-pointer relative">
        <picture>
          <img
            className="w-full h-auto block rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${img}`}
            alt="/"
          />
        </picture>
        <div className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full">
          <MdClose onClick={() => deletee(movie.id)} className="text-2xl" />
        </div>
      </div>
      <div>
        <p className="text-md flex items-center gap-x-1">
          {movie?.releaseDate.substring(4, '')} •
          <span>
            <RiFilmFill />
          </span>
          {type} • {genres[0]?.[genre[0]]}
        </p>
        <p className=" text-xl">{title}</p>
      </div>
    </div>
  );
};

export default BookmarkedMovies;
