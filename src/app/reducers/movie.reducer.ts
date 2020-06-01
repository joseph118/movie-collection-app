import { Action, createReducer, on } from '@ngrx/store';
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from '../actions/movie/movie.actions';
import { Movies } from '../types/movie.type';

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
  on(loadMoviesFailure, state => ({ ...state, loading: false })),
  on(loadMoviesSuccess, state => ({ data: state.data, error: null, loading: false }))
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}
