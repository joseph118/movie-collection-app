import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { clearFilters, filterByGenre, filterByText, FiltersActionType } from '../actions/filters.actions';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { getMovies } from '../actions/movies.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getFilterGenres, getFilterText } from '../reducer';

@Injectable()
export class FiltersEffects {
  filters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterByGenre, filterByText),
      concatMap(action =>
        of(action).pipe(withLatestFrom(this.store$.select(getFilterText), this.store$.select(getFilterGenres)))
      ),
      tap(([action, storeText, storeGenres]) => {
        let genres;
        let text;

        if (action.type === FiltersActionType.filterByGenre) {
          genres = action.payload;
          text = storeText;
        } else {
          text = action.payload;
          genres = storeGenres;
        }

        this.store$.dispatch(getMovies({ payload: { genres, text } }));

        this.router.navigate([], {
          queryParams: {
            ...(text ? { text } : {}),
            ...(genres?.length ? { genres: genres.join(',') } : {})
          },
          relativeTo: this.activatedRoute
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
          this.router.navigate([], { queryParams: {}, relativeTo: this.activatedRoute });
          this.store$.dispatch(getMovies(null));
        }

        return { type: FiltersActionType.clearFiltersSuccess };
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
}
