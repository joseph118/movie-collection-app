import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { clearFilters, filterByGenre } from '../../../../actions/filters.actions';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../../reducers';
import { ActivatedRoute } from '@angular/router';
import { genreList, GenreType } from '../../../../models/genre.model';
import { FilterUtils } from '../../../../utils/filter-utils';

export type GenreFilters = GenreFilter[];

export interface GenreFilter {
  value: GenreType;
  selected: boolean;
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent implements OnInit, OnDestroy {
  genres: GenreFilter[];
  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {
    this.genres = genreList.map(genre => ({ value: genre, selected: false }));
  }

  ngOnInit(): void {
    const filters = FilterUtils.getFilterQueryParams(this.activatedRoute, genreList);
    if (filters.genres) {
      filters.genres.forEach(filterGenre => {
        this.genres.find(genre => genre.value === filterGenre).selected = true;
      });
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearFilters({ payload: false }));
  }

  clearFilters(): void {
    this.genres = this.genres.map(genre => ({ ...genre, selected: false }));
    this.store.dispatch(clearFilters({ payload: true }));
  }

  onGenreClick(genre: GenreFilter): void {
    genre.selected = !genre.selected;
    this.triggerFilter();
  }

  private triggerFilter(): void {
    this.store.dispatch(
      filterByGenre({
        payload: this.genres.filter(genre => genre.selected).map(genre => genre.value)
      })
    );
  }
}
