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

  on(MoviesActions.getMovies, state => ({
    ...state,
    error: '',
    loading: true,
    movies: null
  })),
  on(MoviesActions.getMoviesSuccess, (state, action) => ({
    ...state,
    movies: action.payload,
    error: '',
    loading: false
  })),
  on(MoviesActions.getMoviesFailure, (state, action) => ({
    ...state,
    movies: null,
    error: action.payload,
    loading: false
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getMovies = (state: State) => state.movies;
