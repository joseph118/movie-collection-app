import { createAction, props } from '@ngrx/store';
import { Genres } from '../types/genre.type';

export enum FiltersActionType {
  filterByText = '[Filters] Filter By Text',
  filterByTextSuccess = '[Filters] Filter By Text Success',
  filterByGenre = '[Filters] Filter By Genre',
  filterByGenreSuccess = '[Filters] Filter By Genre Success',
  clearFilters = '[Filters] Clear Filters',
  clearFiltersSuccess = '[Filters] Clear Filters Success'
}

export const filterByText = createAction(FiltersActionType.filterByText, props<{ payload: string }>());
export const filterByTextSuccess = createAction(FiltersActionType.filterByTextSuccess);
export const filterByGenre = createAction(FiltersActionType.filterByGenre, props<{ payload: Genres }>());
export const filterByGenreSuccess = createAction(FiltersActionType.filterByGenreSuccess);
export const clearFilters = createAction(FiltersActionType.clearFilters, props<{ payload: boolean }>());
export const clearFiltersSuccess = createAction(FiltersActionType.clearFiltersSuccess);
