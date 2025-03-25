
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addTrendingMovies } from "../utils/moviesSlice";

const useTrandingMovies =  () =>{

 const dispatch = useDispatch();

const getTrandingMovies = async () =>{
   const data = await fetch(
       "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        API_OPTIONS
       );
       const json = await data.json();

       dispatch(addTrendingMovies(json.results));
};   

    useEffect(()=>{
        getTrandingMovies();
    },[]);

}

export default useTrandingMovies;