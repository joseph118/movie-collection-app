import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.actions';
import { Movies } from '../../../../../../models/movie.model';

export interface State {
  error: string;
  loading: boolean;
  movies: Movies | null;
  requestId: number;
}

export const initialState: State = {
  error: '',
  loading: false,
  movies: null,
  requestId: 0
};

export const reducer = createReducer(
  initialState,

  on(MoviesActions.getMovies, state => ({
    ...state,
    error: '',
    loading: true,
    requestId: state.requestId + 1
  })),
  on(MoviesActions.getMoviesSuccess, (state, action) => ({
    ...state,
    movies: action.payload.movies,
    loading: state.requestId !== action.payload.id
  })),
  on(MoviesActions.getMoviesFailure, (state, action) => ({
    ...state,
    error: action.payload.error,
    loading: state.requestId !== action.payload.id
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getMovies = (state: State) => state.movies;
export const getRequestId = (state: State) => state.requestId;
