import { Action, createReducer, on } from '@ngrx/store';
import { GenreType } from '../types/genre.type';
import * as FiltersAction from '../actions/filters.actions';

export interface FilterState {
  text: string;
  genres: GenreType[];
}

const initialFilterState: FilterState = {
  text: null,
  genres: []
};

const filtersReducer = createReducer(
  initialFilterState,
  on(FiltersAction.filterByGenre, (state, action) => ({ ...state, genres: action.payload })),
  on(FiltersAction.filterByGenreSuccess),
  on(FiltersAction.filterByText, (state, action) => ({ ...state, text: action.payload })),
  on(FiltersAction.filterByTextSuccess)
);

export function reducer(state: FilterState | undefined, action: Action) {
  return filtersReducer(state, action);
}
