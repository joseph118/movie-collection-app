import { createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const selectMovieState = (state: MovieState) => state;
export const selectMovie = createSelector(selectMovieState, (state: MovieState) => state.data);
export const selectMovieLoading = createSelector(selectMovieState, (state: MovieState) => state.loading);
export const selectMovieError = createSelector(selectMovieState, (state: MovieState) => state.error);
