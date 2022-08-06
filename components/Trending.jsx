import { useState, useEffect } from 'react';
import request from '../MovieRequest';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import MovieLarge from './MovieLarge';

import 'swiper/css';
import 'swiper/css/free-mode';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(request.requestTrending).then(res => {
      setMovies(prev => (prev = res.data.results));
    });
  }, []);
  return (
    <div className="mt-8 max-w-[465px] ml-auto">
      <h1 className="text-3xl my-7">Trending</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.8}
        freeMode={true}
        modules={[FreeMode]}
      >
        {movies.map((movie, id) => (
          <SwiperSlide key={id}>
            <MovieLarge movie={movie} id={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
