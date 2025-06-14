import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        loading: false,
        error: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.loading = false;
        },
        clearGptMovieResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    },
});

export const { 
    toggleGptSearchView, 
    addGptMovieResult, 
    clearGptMovieResults,
    setLoading,
    setError
} = gptSlice.actions;

export default gptSlice.reducer;