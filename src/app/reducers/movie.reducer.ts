import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from '../actions/movie/movie.actions';
import { Movies } from '../types/movie.type';
import { GenreType } from '../types/genre.type';

export interface MovieState {
  data: Movies;
  error: string;
  loading: boolean;
  loaded: boolean;
}

const initialMovieState: MovieState = {
  data: null,
  error: null,
  loading: false,
  loaded: false
};

const movieReducer = createReducer(
  initialMovieState,
  on(loadMovies, state => ({ ...state, loading: true })),
  on(loadMoviesFailure, state => ({ ...state, loading: false })),
  on(loadMoviesSuccess, state => ({ data: state.data, error: null, loading: false, loaded: true }))
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}

export const getMoviesSortedByRating = createSelector(
  (state: MovieState) => state.data,
  (movies, props: { limit?: number; order?: 'ASC' | 'DESC' }) => {
    const sortedMovies = movies.sort((movieA, movieB) => {
      const comparison = Number.parseInt(movieA.rate) > Number.parseInt(movieB.rate) ? -1 : 1;

      return props?.order === 'DESC' ? comparison * -1 : comparison;
    });

    if (props?.limit) {
      return sortedMovies.slice(0, props.limit);
    }

    return sortedMovies;
  }
);

export const getMovieById = createSelector(
  (state: MovieState) => state.data,
  (movies, props: { id: number }) => movies.find(movie => movie.id === props?.id)
);

export const getMoviesByText = createSelector(
  (state: MovieState) => state.data,
  (movies, props: { text: string }) =>
    movies.filter(movie => movie.name.includes(props.text) || movie.description.includes(props.text))
);

export const getMoviesByGenre = createSelector(
  (state: MovieState) => state.data,
  (movies, props: { genres: GenreType[] }) =>
    movies.filter(movie => {
      if (props.genres.length) {
        return props.genres.find(genre => movie.genres.filter(movieGenre => genre === movieGenre));
      }

      return true;
    })
);
