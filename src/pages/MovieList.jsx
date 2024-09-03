import React from 'react';
import MovieItem from '../components/MovieItem';

function MovieList({ movies }) {
  return (
    <section className="movie-list-section">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
