import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // Memoize the function with useCallback
    const getMoviesVideos = useCallback(async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }, [movieId, dispatch]); // Dependencies for the callback

    useEffect(() => {
        if (!trailerVideo) {
            getMoviesVideos();
        }
    }, [trailerVideo, getMoviesVideos]); // Dependencies for the effect
};

export default useMovieTrailer;