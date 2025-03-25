import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse= () =>{

   useNowPlayingMovies();
   usePopularMovies();
   useTrandingMovies();
   useUpcomingMovies();

    return (
        <div>
         <Header/>
         <MainContainer/>
         <SecoundaryContainer/>
        </div>
       
        
    )
};

export default Browse;