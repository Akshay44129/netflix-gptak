import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
    },
    reducers:{
        addNowPlyingMovies :(state , action) =>{
         state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlyingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;