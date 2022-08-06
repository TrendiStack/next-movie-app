import { useContext } from 'react';
import MovieSmall from './MovieSmall';
import { MovieContext } from '../context/movies.context';

const Recommended = () => {
  const { filterPopular } = useContext(MovieContext);

  return (
    <div className="max-w-[450px] md:max-w-full mx-auto">
      <h1 className="text-3xl my-7">Recommended for you</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5">
        {filterPopular.map((movie, id) => (
          <MovieSmall key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
