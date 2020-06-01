import { Movies } from '../types/movie.type';
import { Action, createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess, loadMoviesFailure, loadMovies } from '../actions/movie/movie.actions';

export interface MovieState {
  data: Movies;
  error: string;
  loading: boolean;
}

const initialMovieState: MovieState = {
  data: null,
  error: null,
  loading: false
};

const movieReducer = createReducer(
  initialMovieState,
  on(loadMovies, state => ({ ...state, loading: true })),
  on(loadMoviesFailure, state => ({ ...state, error: 'Error while loading movies', loading: false })),
  on(loadMoviesSuccess, state => ({ data: state.data, error: null, loading: false }))
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}
