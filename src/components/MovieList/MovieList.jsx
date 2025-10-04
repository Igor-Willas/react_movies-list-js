import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li>
          <MovieCard key={movie.imdbId} movie={movie} />
        </li>
      ))}
    </ul>
  );
};
