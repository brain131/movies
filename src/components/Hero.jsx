import React from 'react'

function Hero() {
  return (
  <>
     <div className='relative  w-full h-125 items-center justify-center text-center flex font-serif mt-15' 
     style={{ backgroundImage: `url(${img})`}} 
     >
      
      <section className="px-6 md:px-12 py-12">

        <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
          Discover your next movie
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Explore Movies
        </h2>

        <p className="text-white max-w-xl">
          Discover great movies, explore different genres
          and find something worth watching.
        </p>

      </section>
    </div>
    </>
  )
}

export default Hero