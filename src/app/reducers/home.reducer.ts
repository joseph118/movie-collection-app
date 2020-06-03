import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { Movies } from '../types/movie.type';

export interface HomeState {
  error: string;
  loading: boolean;
  topRatedMovies: Movies;
}

const initialHomeState: HomeState = {
  error: null,
  loading: false,
  topRatedMovies: null
};

const homeReducer = createReducer(
  initialHomeState,

  on(HomeActions.loadTopRatedMovies, state => ({ ...state, topRatedMovies: [], loading: true })),
  on(HomeActions.loadTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    topRatedMovies: action.payload,
    error: null,
    loading: false
  })),
  on(HomeActions.loadTopRatedMoviesFailure, (state, action) => ({
    ...state,
    topRatedMovies: [],
    loading: false,
    error: action.payload
  }))
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
