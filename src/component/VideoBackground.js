import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    // ------ Hook
    useMovieTrailer(movieId);


    return (
        <div className=" w-screen">
            <iframe
                className=" w-full aspect-video h-screen absolute top-0 left-0"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?&autoplay=1&mute=1'}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
