import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
    },
    reducers:{
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPlyingMovies :(state , action) =>{
         state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state , action) =>{
            state.popularMovies = action.payload;
           },
           addTrendingMovies  :(state , action) =>{
            state.trandingMovies = action.payload;
           },
           addUpcomingMovies  :(state , action) =>{
            state.upComingMovies = action.payload;
           },
       
        
    }
});

export const {addNowPlyingMovies, addTrailerVideo, addPopularMovies,addTrendingMovies, addUpcomingMovies  } = moviesSlice.actions;

export default moviesSlice.reducer;