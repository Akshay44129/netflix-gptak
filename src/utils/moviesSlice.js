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
        addTrailerVideo: (state,action)=>{
            state.trilerVideo = action.payload;
        }
    }
});

export const {addNowPlyingMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;