import { createReducer, on } from '@ngrx/store';
import * as TopRatedMoviesActions from '../top-rated-movies.actions';
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

  on(TopRatedMoviesActions.getTopRatedMovies, state => ({
    ...state,
    movies: null,
    error: '',
    loading: true
  })),
  on(TopRatedMoviesActions.getTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    movies: action.payload,
    error: '',
    loading: false
  })),
  on(TopRatedMoviesActions.getTopRatedMoviesFailure, (state, action) => ({
    ...state,
    movies: null,
    loading: false,
    error: action.payload
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getTopRatedMovies = (state: State) => state.movies;
