import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title, movies }) => {
    // console.log(movies)
    // console.log('yoyo')
    return (
        <div className='  relative -bottom-96 pt-6 z-20'>
            <h1 className=' mb-4 font-bold'>{title}</h1>
            <div className='scrollbar flex overflow-x-scroll h-52 gap-6 sm:h-80'>
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;