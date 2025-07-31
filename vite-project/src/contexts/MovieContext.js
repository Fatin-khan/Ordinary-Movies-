import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
