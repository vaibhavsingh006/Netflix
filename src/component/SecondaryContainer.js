import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)

    return movies?.NowPlayingMovies && (
        <div className=" bg-black text-white listKpiche mt-20">
            <MovieList title={""} movies={movies.NowPlayingMovies} />
            {/* <MovieList title={"Popular"} movies={movies.PopularMovies} /> */}
            <MovieList title={"Top Rated"} movies={movies.TopRated} />
            <MovieList title={"New One"} movies={movies.NowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.TopRated} />
            {/* <MovieList title={"Popular"} movies={movies.PopularMovies} /> */}
        </div>
    )
}

export default SecondaryContainer;
