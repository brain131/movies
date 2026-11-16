import React from 'react'

function MovieCard({movie}) {
  return (
  <div className="bg-[#151c2c] rounded-xl overflow-hidden border border-white/5 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

     
      <div className="h-64 overflow-hidden">

        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

      </div>

   
      <div className="p-4">

        <h3 className="font-bold text-lg mb-2 text-white">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center text-sm text-white mb-3">

          <span>{movie.year}</span>

          <span className="text-yellow-400">
           
          </span>

        </div>

        <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {movie.genre}
        </span>

      </div>

    </div>

)
}

export default MovieCard