import { useDispatch, useSelector } from "react-redux"
import MovieList from "./MovieList"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovieResult } from "../utils/gptSlice"
import { json } from "react-router-dom"
import GptMovieSuggesion from "./GptMovieSuggesion"
import Error from "./Error"

const GptSearch = () => {

    const searchText = useRef(null);

    const dispatch = useDispatch();



    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        // console.log(json.results)
        return json.results;
    }



    const handleGptSearchClick = async () => {

        console.log(searchText.current.value)
        searchMovieTMDB(searchText.current.value)
        const resultMovie = await searchMovieTMDB(searchText.current.value);
        console.log(resultMovie);

        dispatch(addGptMovieResult(resultMovie))

        if (resultMovie.length === 0) {
            // console.log('galat - -  - -- - -')
            return <Error />
        }

        // const gptQuery = 'Act as a Movie Recommendation system and suggest some movies for the query : ' + searchText.current.value + '. only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Mai Hu Na, Golmaal, Tere Naam'

        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: { gptQuery } }],
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(gptResults.choices);
    }


    const movies = useSelector(store => store.movies)

    const langKey = useSelector(store => store.config.lang)

    return movies?.NowPlayingMovies && (
        <div>
            <div className="z-20 w-full flex justify-center mt-16 relative sm:top-0 top-12">
                <div className="flex gap-6 sm:w-5/12 w-5/6">
                    <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className=" border-black border py-2 pl-1 rounded w-full" />
                    <button className="font-bold bg-red-600 text-white px-4 rounded" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
                </div>

            </div>
            <GptMovieSuggesion />
            {/* <MovieList movies={movies.NowPlayingMovies} /> */}
        </div>
    )
}

export default GptSearch;
