import { createAction, props } from '@ngrx/store';
import { Movie, Movies } from '../types/movie.type';
import { GenreType } from '../types/genre.type';

export enum MoviesActionType {
  loadMovies = '[Movies] Load Movies',
  loadMoviesSuccess = '[Movies] Load Movies Success',
  loadMoviesFailure = '[Movies] Load Movies Failure',

  getMovie = '[Movies] Get Movie',
  getMovieSuccess = '[Movies] Get Movie Success',
  getMovieFailure = '[Movies] Get Movie Failure'
}

export const loadMovies = createAction(
  MoviesActionType.loadMovies,
  props<{ payload: { text?: string; genres?: GenreType[] } }>()
);
export const loadMoviesSuccess = createAction(MoviesActionType.loadMoviesSuccess, props<{ payload: Movies }>());
export const loadMoviesFailure = createAction(MoviesActionType.loadMoviesFailure, props<{ payload: string }>());

export const getMovie = createAction(MoviesActionType.getMovie, props<{ payload: number }>());
export const getMovieSuccess = createAction(MoviesActionType.getMovieSuccess, props<{ payload: Movie }>());
export const getMovieFailure = createAction(MoviesActionType.getMovieFailure, props<{ payload: string }>());
