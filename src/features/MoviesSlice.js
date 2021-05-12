import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState : {
    movie:[],
  },
  reducers: {
    addMovieInfo: (state, action) => {
      state.movie.push(action.payload.movie)
    },
    removeMovie: (state, action) => {
        const new_arr = state.movie.filter(data => data.id != action.payload.movie.id);
        state.movie = new_arr
    }
  }
});

export const { addMovieInfo,removeMovie } = moviesSlice.actions;
export const selectMovie = (state) => state.movies.movie;
export default moviesSlice.reducer;