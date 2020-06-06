import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../../../../../models/movie.model';
import * as MovieDetailActions from '../movie-detail.actions';

export interface State {
  error: string;
  loading: boolean;
  movie: Movie | null;
}

export const initialState: State = {
  error: '',
  loading: false,
  movie: null
};

export const reducer = createReducer(
  initialState,

  on(MovieDetailActions.getMovieDetail, state => ({
    ...state,
    movie: null,
    loading: true,
    error: ''
  })),
  on(MovieDetailActions.getMovieDetailSuccess, (state, action) => ({
    ...state,
    movie: action.payload,
    error: '',
    loading: false
  })),
  on(MovieDetailActions.getMovieDetailFailure, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
    movie: null
  }))
);

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getMovie = (state: State) => state.movie;
