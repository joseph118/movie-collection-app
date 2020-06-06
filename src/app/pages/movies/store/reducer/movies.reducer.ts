import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.actions';
import { Movies } from '../../../../models/movie.model';

export interface State {
  error: string;
  loading: boolean;
  movies: Movies | null;
}

export const initialState: State = {
  error: '',
  loading: false,
  movies: null
};

export const reducer = createReducer(
  initialState,

  on(MoviesActions.loadMovies, state => ({
    ...state,
    error: '',
    loading: true
  })),
  on(MoviesActions.loadMoviesSuccess, (state, action) => ({
    ...state,
    movies: action.payload,
    error: '',
    loading: false
  })),
  on(MoviesActions.loadMoviesFailure, (state, action) => ({
    ...state,
    movies: [],
    error: action.payload,
    loading: false
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getMovies = (state: State) => state.movies;
