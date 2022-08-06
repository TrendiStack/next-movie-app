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

  const breakpoints = {
    465: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  };
  return (
    <div className="mt-8 max-w-[465px] md:max-w-full ml-auto">
      <h1 className="text-3xl my-7">Trending</h1>
      <Swiper
        // spaceBetween={10}
        // slidesPerView={6}
        breakpoints={breakpoints}
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
