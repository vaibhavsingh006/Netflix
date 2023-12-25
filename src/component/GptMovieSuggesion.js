import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'

const GptMovieSuggesion = () => {
    const movieRsults = useSelector(store => store.gpt)
    // const lastOne = movieRsults.gptMovies
    // console.log(lastOne)
    // console.log(movieRsults.gptMovies[0].overview)

    console.log(movieRsults.poster_path)
    return (
        <div className=' text-black flex gap-16 my-20 flex-wrap'>
            {movieRsults?.gptMovies?.map((movie) => (

                <div className=" border-black shadow shadow-black rounded bg-gray-200 p-3 box my-0 mx-auto" key={movie.id}>
                    <div className=" h-1/3"><img className=' w-full h-full rounded' src={IMG_CDN_URL + movie.poster_path} alt="Img" /></div>
                    <h2 className=' font-semibold text-lg mt-7'>{movie.original_title}</h2>
                    <h2>{movie.original_language}</h2>
                    <h2>{movie.release_date}</h2>
                    {/* <h3>{movie.overview}</h3> */}
                </div>
            ))}
        </div>
    )
}

export default GptMovieSuggesion;