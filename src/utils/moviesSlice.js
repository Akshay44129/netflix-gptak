import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
    },
    reducers:{
        addNowPlyingMovies :(state , action) =>{
         state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state , action) =>{
            state.popularMovies = action.payload;
           },
           addTrendingMovies  :(state , action) =>{
            state.trandingMovies = action.payload;
           },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
        
    }
});

export const {addNowPlyingMovies, addTrailerVideo, addPopularMovies,addTrendingMovies  } = moviesSlice.actions;

export default moviesSlice.reducer;