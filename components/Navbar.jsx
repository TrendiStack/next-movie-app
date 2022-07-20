import Link from 'next/link';
import { MdMovie } from 'react-icons/md';
import { AiFillAppstore } from 'react-icons/ai';
import { RiFilmFill, RiTvFill } from 'react-icons/ri';
import { FaBookmark } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-[#161D2F]">
      <div className="flex items-center w-full max-w-[450px] mx-auto  py-2">
        <Link href="/">
          <MdMovie className="text-[#FC4747] cursor-pointer" size={50} />
        </Link>
        <ul className="flex w-full justify-center gap-4 text-lg text-[#5A698F]">
          <li className="cursor-pointer">
            <AiFillAppstore className="text-white" />
          </li>
          <li className="cursor-pointer">
            <RiFilmFill />
          </li>
          <li className="cursor-pointer">
            <Link href="/tv-series">
              <RiTvFill />
            </Link>
          </li>
          <li className="cursor-pointer">
            <FaBookmark />
          </li>
        </ul>
        <picture>
          <img
            className="w-[34px] h-[30px] rounded-full border-2  border-white"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGmY00ghzrOlQ/profile-displayphoto-shrink_200_200/0/1647464256334?e=1658966400&v=beta&t=jqkz5ZjFVZJyk-IkIdUKBo2fls5dFBKDamtHmyjEcXU"
            alt="/"
          />
        </picture>
      </div>
    </div>
  );
};

export default Navbar;
