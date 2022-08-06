// UTILS
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../context/user.context';
import { signOutUser } from '../firebase';
// REACT ICONS
import { MdMovie } from 'react-icons/md';
import { AiFillAppstore } from 'react-icons/ai';
import { RiFilmFill, RiTvFill, RiAccountCircleFill } from 'react-icons/ri';
import { FaBookmark } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useRouter();
  const styles = {
    active: 'text-white',
  };
  const toggleDropDown = () => {
    setDropdown(prev => (prev = !prev));
  };
  const handleLogOut = async () => {
    try {
      navigate.push('/login');
      await signOutUser();
      setCurrentUser(prev => (prev = null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#161D2F] md:fixed md:bg-[#161D2F] md:top-0 md:bottom-0 md:left-0 md:rounded-lg md:my-3 md:ml-3 z-50">
      <div className="flex items-center max-w-[450px] mx-auto md:mx-2 md:flex md:flex-col md:items-center md:h-full justify-between">
        <Link href="/">
          <div className="md:mb-14">
            <MdMovie
              className="text-[#FC4747] cursor-pointer hover:text-white transition-all ease-out"
              size={50}
              onClick={() => setActive(prev => (prev = 'home'))}
            />
          </div>
        </Link>
        <ul className="flex  gap-4 text-lg md:h-full md:flex-col md:text-2xl text-[#5A698F] ">
          <li className="cursor-pointer">
            <Link href="/">
              <div className="hover:text-[#FC4747] transition-all ease-in">
                <AiFillAppstore
                  onClick={() => setActive(prev => (prev = 'home'))}
                  className={active === 'home' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/movies">
              <div className="hover:text-[#FC4747] transition-all ease-in">
                <RiFilmFill
                  onClick={() => setActive(prev => (prev = 'movie'))}
                  className={active === 'movie' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/tv-series">
              <div className="hover:text-[#FC4747] transition-all ease-in">
                <RiTvFill
                  onClick={() => setActive(prev => (prev = 'series'))}
                  className={active === 'series' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/bookmarks">
              <div className="hover:text-[#FC4747] transition-all ease-in">
                <FaBookmark
                  onClick={() => setActive(prev => (prev = 'bookmarks'))}
                  className={`${
                    active === 'bookmarks' ? styles.active : ''
                  } md:text-xl md:mt-[2px]`}
                />
              </div>
            </Link>
          </li>
        </ul>
        <div>
          {currentUser ? (
            <picture onClick={toggleDropDown}>
              <img
                className="w-[30px] h-[30px] rounded-full border-2 border-white hover:border-[#FC4747] md:mb-5 transition-all ease-in"
                src={currentUser.photoURL}
                alt="/"
              />
            </picture>
          ) : (
            <Link href="/login">
              <button className="text-sm bg-[#FC4747] cursor-pointer py-[0.4rem] px-2 rounded">
                LogIn
              </button>
            </Link>
          )}
          {dropdown && (
            <div className="absolute right-[7px] md:bottom-[55px] md:right-[2.5px] z-50">
              <ul className="bg-[#161D2F] text-2xl p-5 rounded-lg">
                <li className="relative mb-4 cursor-pointer hover:text-[#FC4747]">
                  <RiAccountCircleFill />
                </li>
                <li className="relative left-[3.5px] cursor-pointer hover:text-[#FC4747]">
                  <HiOutlineLogout
                    onClick={() => {
                      handleLogOut();
                      toggleDropDown();
                    }}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
