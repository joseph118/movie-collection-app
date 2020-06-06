import * as fromRoot from '../../../../reducers';
import * as fromFilters from './filters.reducer';
import * as fromMovies from './movies.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const moviesFeatureKey = 'movies';

export interface MoviesState {
  filters: fromFilters.State;
  movieList: fromMovies.State;
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MoviesState;
}

export const reducers: ActionReducerMap<MoviesState> = {
  filters: fromFilters.reducer,
  movieList: fromMovies.reducer
};

// States Selectors
export const selectMoviesState = createFeatureSelector<State, MoviesState>(moviesFeatureKey);
export const selectFiltersState = createSelector(selectMoviesState, (state: MoviesState) => state.filters);
export const selectMovieListState = createSelector(selectMoviesState, (state: MoviesState) => state.movieList);

// Selectors
export const getMovieList = createSelector(selectMovieListState, fromMovies.getMovies);
export const getMovieListLoading = createSelector(selectMovieListState, fromMovies.getLoading);
export const getMovieListError = createSelector(selectMovieListState, fromMovies.getError);

export const getFilterText = createSelector(selectFiltersState, fromFilters.getText);
export const getFilterGenres = createSelector(selectFiltersState, fromFilters.getGenres);
