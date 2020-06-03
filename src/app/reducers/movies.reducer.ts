import { Action, createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movies.actions';
import { Movies } from '../types/movie.type';

export interface MoviesState {
  error: string;
  loading: boolean;
  data: Movies;
}

const initialMoviesState: MoviesState = {
  error: null,
  loading: false,
  data: null
};

const moviesReducer = createReducer(
  initialMoviesState,

  on(MovieActions.loadMovies, state => ({ ...state, data: [], loading: true })),
  on(MovieActions.loadMoviesSuccess, (state, action) => ({
    ...state,
    data: action.payload,
    error: null,
    loading: false
  })),
  on(MovieActions.loadMoviesFailure, (state, action) => ({ ...state, error: action.payload, loading: false }))
);

export function reducer(state: MoviesState | undefined, action: Action) {
  return moviesReducer(state, action);
}
