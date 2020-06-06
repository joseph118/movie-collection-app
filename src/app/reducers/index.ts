import { ActionReducerMap } from '@ngrx/store';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

// export function getInitialState(): State {
//   return {
//     movie: initialMovieState,
//     movies: initialMoviesState,
//     filters: initialFilterState
//   };
// }
//
// export const selectMovieState = (state: State) => state.movie;
// export const selectMoviesState = (state: State) => state.movies;
// export const selectFiltersState = (state: State) => state.filters;

// export const selectMovies = createSelector(selectMoviesState, (state: MoviesState) => state.data);
// export const selectMoviesLoading = createSelector(selectMoviesState, (state: MoviesState) => state.loading);
// export const selectMoviesError = createSelector(selectMoviesState, (state: MoviesState) => state.error);
//

// export const selectFilterText = createSelector(selectFiltersState, (state: FilterState) => state.text);
// export const selectFilterGenres = createSelector(selectFiltersState, (state: FilterState) => state.genres);
//
