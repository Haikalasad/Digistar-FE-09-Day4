import React from 'react';

function MovieItem({ movie }) {
  const truncateDescription = (description) => {
    const sentences = description.split('. ');
    return sentences.length > 2 ? sentences.slice(0, 2).join('. ') + '.' : description;
  };

  return (
    <div className="movie-item">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{truncateDescription(movie.overview)}</p>
      </div>
      <div className="play-icon">&#9658;</div>
    </div>
  );
}

export default MovieItem;
