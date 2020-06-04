import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MoviesState, moviesReducer } from './movies.reducer';
import { FilterState, filtersReducer } from './filters.reducer';
import { HomeState, homeReducer } from './home.reducer';
import { MovieState, movieReducer } from './movie.reducer';

export interface ApplicationState {
  movie: MovieState;
  movies: MoviesState;
  filters: FilterState;
  home: HomeState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  movie: movieReducer,
  movies: moviesReducer,
  filters: filtersReducer,
  home: homeReducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

export const selectMoviesState = (state: ApplicationState) => state.movies;
export const selectMovies = createSelector(selectMoviesState, (state: MoviesState) => state.data);
export const selectMoviesLoading = createSelector(selectMoviesState, (state: MoviesState) => state.loading);
export const selectMoviesError = createSelector(selectMoviesState, (state: MoviesState) => state.error);

export const selectFiltersState = (state: ApplicationState) => state.filters;
export const selectFilterText = createSelector(selectFiltersState, (state: FilterState) => state.text);
export const selectFilterGenres = createSelector(selectFiltersState, (state: FilterState) => state.genres);

export const selectHomeState = (state: ApplicationState) => state.home;
export const selectTopRatedMovies = createSelector(selectHomeState, (state: HomeState) => state.topRatedMovies);
export const selectTopRatedMoviesLoading = createSelector(selectHomeState, (state: HomeState) => state.loading);
export const selectTopRatedMoviesError = createSelector(selectHomeState, (state: HomeState) => state.error);

export const selectMovieState = (state: ApplicationState) => state.movie;
export const selectMovie = createSelector(selectMovieState, (state: MovieState) => state.data);
export const selectMovieLoading = createSelector(selectMovieState, (state: MovieState) => state.loading);
export const selectMovieError = createSelector(selectMovieState, (state: MovieState) => state.error);
