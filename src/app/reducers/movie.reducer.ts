import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import { Movie } from '../types/movie.type';

export interface MovieState {
  error: string;
  loading: boolean;
  data: Movie | null;
}

const initialMovieState: MovieState = {
  error: '',
  loading: false,
  data: null
};

export const movieReducer = createReducer(
  initialMovieState,

  on(MovieActions.getMovie, state => ({
    ...state,
    data: null,
    loading: true,
    error: ''
  })),
  on(MovieActions.getMovieSuccess, (state, action) => ({
    ...state,
    data: action.payload,
    error: '',
    loading: false
  })),
  on(MovieActions.getMovieFailure, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
    data: null
  }))
);
