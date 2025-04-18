import { useDispatch} from "react-redux";
// import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const useMovieTrailer =(movieId) =>{

    const dispatch = useDispatch();

    // const [trailerId, setTrailerId]=useState(null);

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    //fetch trailer video 
   const  getMoviesVideos = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId 
            +  "/videos?language=en-US",
            API_OPTIONS);
        const json = await data.json();
   

        const filterData = json.results.filter(video =>video.type === "Trailer");
       
        const trailer =filterData.length ? filterData[0] : json.results[0];
     
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
  
        
    };

    useEffect(() => {
        !trailerVideo && getMoviesVideos();
      }, []);


};


export default useMovieTrailer;