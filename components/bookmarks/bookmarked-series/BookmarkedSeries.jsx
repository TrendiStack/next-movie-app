import Image from 'next/image';
import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';
import { SavedContext } from '../../../context/saved.context';
import { UserContext } from '../../../context/user.context';
import { deleteShowFromDoc } from '../../../firebase';

const BookmarkedSeries = ({ show, genres }) => {
  const { currentUser } = useContext(UserContext);
  const { savedSeries } = useContext(SavedContext);

  const deletee = async id => {
    const result = savedSeries.filter(show => show.id !== id);
    try {
      await deleteShowFromDoc(currentUser.uid, result);
    } catch (error) {
      console.log(error);
    }
  };
  if (!currentUser.uid) {
    return <div></div>;
  } else {
    return (
      <div className="pb-5">
        <div className="inline-block cursor-pointer relative">
          <Image
            className="w-full h-auto block rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${show?.img}`}
            alt="/"
            width={265}
            height={165}
          />
          <div className="flex justify-center items-center absolute top-2 right-2 bg-[#10141E] bg-opacity-[0.5] w-[32px] h-[32px] rounded-full">
            <MdClose onClick={() => deletee(show?.id)} className="text-2xl" />
          </div>
        </div>
        <div>
          <p className="text-md flex items-center gap-x-1">
            {show?.releaseDate.substring(4, '')} •
            <span>
              <RiFilmFill />
            </span>
            {show?.type} • {genres[0]?.[show?.genre[0]]}
          </p>
          <p className=" text-xl">{show?.title}</p>
        </div>
      </div>
    );
  }
};

export default BookmarkedSeries;
