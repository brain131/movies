import { useState } from 'react'
import MovieList from './components/MovieList'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'

import React from 'react'

function App() {
const movies=[
 {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: "Adventure",
      rating: 8.7,
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 3,
      title: "The Batman",
      year: 2022,
      genre: "Action",
      rating: 7.8,
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      id: 4,
      title: "Oppenheimer",
      year: 2023,
      genre: "Drama",
      rating: 8.3,
      image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
    },
    {
      id: 5,
      title: "Dune: Part Two",
      year: 2024,
      genre: "Sci-Fi",
      rating: 8.5,
      image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },
    {
      id: 6,
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      genre: "Animation",
      rating: 8.6,
      image: "https://www.themoviedb.org/t/p/w1280/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    }


]


  return (
     <>   
  <Nav/>
  <Hero/>
<section className="px-6 md:px-12 pb-16">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-xl md:text-2xl font-semibold">
            Popular Movies
          </h2>

          <span className="text-gray-400 text-sm">
           {movies.length} Movies
          </span>

        </div>
        <MovieList movies={movies} />


      </section>

<Footer/>
    </>
  )
}

export default App