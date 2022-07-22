import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Bookmarks = () => {
  const { user } = UserAuth();
  const navigate = useRouter();
  useEffect(() => {
    if (!user) {
      navigate.push('/');
    }
  });

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-3xl my-7">Bookmarks</h1>
        <div className="grid grid-cols-2 gap-x-5"></div>
      </div>
    </div>
  );
};

export default Bookmarks;
