import { createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { Movies } from '../types/movie.type';

export interface HomeState {
  error: string;
  loading: boolean;
  topRatedMovies: Movies | null;
}

const initialHomeState: HomeState = {
  error: '',
  loading: false,
  topRatedMovies: null
};

export const homeReducer = createReducer(
  initialHomeState,

  on(HomeActions.loadTopRatedMovies, state => ({
    ...state,
    topRatedMovies: [],
    error: '',
    loading: true
  })),
  on(HomeActions.loadTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    topRatedMovies: action.payload,
    error: '',
    loading: false
  })),
  on(HomeActions.loadTopRatedMoviesFailure, (state, action) => ({
    ...state,
    topRatedMovies: null,
    loading: false,
    error: action.payload
  }))
);
