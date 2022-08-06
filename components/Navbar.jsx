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
      // console.log(error);
    }
  };
  // handleLogOut();

  return (
    <div className="bg-[#161D2F]">
      <div className="flex items-center w-full max-w-[450px] mx-auto  py-2">
        <Link href="/">
          <div>
            <MdMovie
              className="text-[#FC4747] cursor-pointer"
              size={50}
              onClick={() => setActive(prev => (prev = 'home'))}
            />
          </div>
        </Link>
        <ul className="flex w-full justify-center gap-4 text-lg text-[#5A698F]">
          <li className="cursor-pointer">
            <Link href="/">
              <div>
                <AiFillAppstore
                  onClick={() => setActive(prev => (prev = 'home'))}
                  className={active === 'home' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/movies">
              <div>
                <RiFilmFill
                  onClick={() => setActive(prev => (prev = 'movie'))}
                  className={active === 'movie' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/tv-series">
              <div>
                <RiTvFill
                  onClick={() => setActive(prev => (prev = 'series'))}
                  className={active === 'series' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/bookmarks">
              <div>
                <FaBookmark
                  onClick={() => setActive(prev => (prev = 'bookmarks'))}
                  className={active === 'bookmarks' ? styles.active : ''}
                />
              </div>
            </Link>
          </li>
        </ul>
        <div>
          {currentUser ? (
            <picture onClick={toggleDropDown}>
              <img
                className="w-[34px] h-[30px] rounded-full border-2  border-white"
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
            <div className="absolute right-[1px] z-50">
              <ul className="bg-[#161D2F] text-2xl p-5 rounded-lg">
                <li className="relative left-1 mb-4 cursor-pointer">
                  <RiAccountCircleFill />
                </li>
                <li className="relative left-[0.4rem] cursor-pointer">
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
