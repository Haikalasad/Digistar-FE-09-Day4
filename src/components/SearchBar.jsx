import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>

        <button
        onClick={() => {
          throw new Error('Test error for Error Boundary');
        }}
        style={{ margin: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#E50914', color: '#fff' }}
      >
        Trigger Error
      </button>
      </form>
    </div>
  );
}

export default SearchBar;
