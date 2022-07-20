import Image from 'next/dist/client/image';
import Spidey from '../public/spidey.jpg';
import { RiFilmFill, RiTvFill } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const Movie = ({ movie }) => {
  return (
    <div>
      <div className="inline-block cursor-pointer relative">
        <Image
          className="w-full h-auto block rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt="/"
          width={265}
          height={155}
        />
        <div className="absolute bottom-2 left-2 z-50">
          <p className="text-sm flex items-center gap-x-1">
            {movie?.release_date.substring(0, 4)} •
            <span>
              <RiFilmFill />
            </span>
            Movie • PG
          </p>
          <p className=" text-lg">{movie?.title}</p>
        </div>
        <div className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full">
          <BsBookmark />
        </div>
      </div>
    </div>
  );
};

export default Movie;
