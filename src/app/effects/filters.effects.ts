import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { clearFilters, filterByGenre, filterByText, FiltersActionType } from '../actions/filters.actions';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { loadMovies } from '../actions/movies.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState, selectFilterGenres, selectFilterText } from '../reducers';
import { Router } from '@angular/router';

@Injectable()
export class FiltersEffects {
  private static readonly movieRoute = '/movies';

  filters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterByGenre, filterByText),
      concatMap(action =>
        of(action).pipe(withLatestFrom(this.store$.select(selectFilterText), this.store$.select(selectFilterGenres)))
      ),
      tap(([action, text, genres]) => {
        this.store$.dispatch(loadMovies({ payload: { genres, text } }));

        this.router.navigate([FiltersEffects.movieRoute], {
          queryParams: {
            ...(text ? { text } : {}),
            ...(genres?.length ? { genres: genres.join(',') } : {})
          }
        });
      }),
      map(([action]) => {
        return action.type === FiltersActionType.filterByGenre
          ? { type: FiltersActionType.filterByGenreSuccess }
          : { type: FiltersActionType.filterByTextSuccess };
      })
    )
  );

  clearFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearFilters),
      map(action => {
        if (action.payload) {
          this.router.navigate([FiltersEffects.movieRoute], { queryParams: {} });
          this.store$.dispatch(loadMovies(null));
        }

        return { type: FiltersActionType.clearFiltersSuccess };
      })
    )
  );

  constructor(private actions$: Actions, private store$: Store<ApplicationState>, private router: Router) {}
}
