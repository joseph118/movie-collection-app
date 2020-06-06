import { createReducer, on } from '@ngrx/store';
import * as FiltersAction from '../filters.actions';
import { GenreType } from '../../../../../models/genre.model';

export interface FilterState {
  text: string;
  genres: GenreType[];
}

export const initialFilterState: FilterState = {
  text: '',
  genres: []
};

export const filtersReducer = createReducer(
  initialFilterState,
  on(FiltersAction.filterByGenre, (state, action) => ({ ...state, genres: action.payload })),
  on(FiltersAction.filterByGenreSuccess),
  on(FiltersAction.filterByText, (state, action) => ({ ...state, text: action.payload })),
  on(FiltersAction.filterByTextSuccess),
  on(FiltersAction.clearFilters, state => ({ text: '', genres: [] })),
  on(FiltersAction.clearFiltersSuccess)
);
