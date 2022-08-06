import { useState, useEffect, useContext } from 'react';
import Image from 'next/dist/client/image';
import { RiFilmFill } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { UserContext } from '../context/user.context';
import { updateSeriesDoc } from '../firebase';

const SeriesSmall = ({ show }) => {
  const [seriesGenres, setSeriesGenres] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [like, setLike] = useState(false);

  const saveShow = async () => {
    if (currentUser) {
      setLike(prev => !prev);

      await updateSeriesDoc(
        currentUser.uid,
        show.id,
        show.name,
        show.backdrop_path,
        show.first_air_date,
        show.genre_ids,
        'Series'
      );
    } else {
      alert('Please log in to bookmark shows');
    }
  };

  return (
    <div className="pb-5">
      <div className="inline-block cursor-pointer relative">
        <Image
          className="w-full h-auto block rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${show?.backdrop_path}`}
          alt="/"
          width={265}
          height={165}
        />
        <div
          onClick={saveShow}
          className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full"
        >
          {like ? <BsBookmarkFill /> : <BsBookmark />}
        </div>
      </div>
      <div>
        <p className="text-md flex items-center gap-x-1">
          {show?.first_air_date?.substring(0, 4)} •
          <span>
            <RiFilmFill />
          </span>
          Series • {seriesGenres[0]?.[show.genre_ids[0]]}
        </p>
        <p className=" text-xl">{show?.name}</p>
      </div>
    </div>
  );
};

export default SeriesSmall;
