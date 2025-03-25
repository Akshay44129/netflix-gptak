import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";

const SecoundaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    useEffect(() => {
        console.log("Movies Data:", movies?.nowPlayingMovies);
        console.log(movies?.popularMovies);
        console.log(movies?.trandingMovies);
    }, []);

    if (!movies || !movies.nowPlayingMovies) {
        return <p>Loading movies...</p>;
    }

    return (
        <div className="scmovies">
           < div className="scmovies2">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Tranding "} movies={movies.trandingMovies || []} />
            <MovieList title={"Popular"} movies={movies.popularMovies || []} />
            <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies || []} />
            <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecoundaryContainer;
