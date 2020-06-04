import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.actions';
import { Movies } from '../types/movie.type';

export interface MoviesState {
  error: string;
  loading: boolean;
  data: Movies | null;
}

const initialMoviesState: MoviesState = {
  error: '',
  loading: false,
  data: null
};

export const moviesReducer = createReducer(
  initialMoviesState,

  on(MoviesActions.loadMovies, state => ({
    ...state,
    error: '',
    loading: true
  })),
  on(MoviesActions.loadMoviesSuccess, (state, action) => ({
    ...state,
    data: action.payload,
    error: '',
    loading: false
  })),
  on(MoviesActions.loadMoviesFailure, (state, action) => ({
    ...state,
    data: [],
    error: action.payload,
    loading: false
  }))
);
