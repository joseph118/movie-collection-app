import { createReducer, on } from '@ngrx/store';
import * as HomeActions from '../home.actions';
import { Movies } from '../../../../models/movie.model';

export interface State {
  error: string;
  loading: boolean;
  movies: Movies | null;
}

const initialState: State = {
  error: '',
  loading: false,
  movies: null
};

export const reducer = createReducer(
  initialState,

  on(HomeActions.loadTopRatedMovies, state => ({
    ...state,
    movies: [],
    error: '',
    loading: true
  })),
  on(HomeActions.loadTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    movies: action.payload,
    error: '',
    loading: false
  })),
  on(HomeActions.loadTopRatedMoviesFailure, (state, action) => ({
    ...state,
    movies: null,
    loading: false,
    error: action.payload
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getTopRatedMovies = (state: State) => state.movies;
