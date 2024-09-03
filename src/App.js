import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HeroSection from './components/HeorSection';
import SearchBar from './components/SearchBar';
import MovieList from './pages/MovieList';
import { ErrorBoundary } from 'react-error-boundary';

function FallbackUI({ error }) {
  return (
    <div className="error-boundary">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies('avengers');
  }, []);

  const fetchMovies = (query) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=d64465f835d027114fd469afd4e2de72&query=${query}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (

    <ErrorBoundary FallbackComponent={FallbackUI}>
      <div className="app">
        <HeroSection />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <MovieList movies={movies} />
      </div>

    </ErrorBoundary>

  );
}

export default App;
