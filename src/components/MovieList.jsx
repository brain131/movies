import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList({movies}) {
  return (
<div>

      {movies.length === 0 ? (

        <p className="text-center text-gray-400 py-16">
          No movies available at the moment.
        </p>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      )}

    </div>

)
}
