import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : { 
        nowPlayingMovies : null ,
        popularMovies: null,
        topratedMovies: null,
        trailerVideo : null
    } ,
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
          addTopRatedMovies: (state , action) => {
             state.topratedMovies = action.payload;
          } ,
        addTrailerVideo : (state , action) => {
            state.trailerVideo = action.payload ;
        }
    }
});

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;