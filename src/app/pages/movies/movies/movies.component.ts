import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovies } from '../../../reducers';
import { loadMovies } from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { Movies } from '../../../types/movie.type';
import { ActivatedRoute } from '@angular/router';
import { genreType, GenreType } from '../../../types/genre.type';
import { clearFilters, filterByGenre } from '../../../actions/filters.actions';

export interface GenreFilter {
  value: GenreType;
  selected: boolean;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit, OnDestroy {
  private static getQueryParams(activatedRoute: ActivatedRoute): { text: string; genres: GenreType[] } {
    const text = activatedRoute.snapshot.queryParams?.text;
    const genres = activatedRoute.snapshot.queryParams?.genres?.split(',');
    return { text, genres };
  }

  genres: GenreFilter[];
  movies$: Observable<Movies>;

  onGenreClick(genre: GenreFilter): void {
    genre.selected = !genre.selected;
    this.triggerFilter();
  }

  clearFilters(): void {
    this.genres = this.genres.map(genre => ({ ...genre, selected: false }));
    this.store.dispatch(clearFilters({ payload: true }));
  }

  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {
    this.genres = Object.keys(genreType).map(key => ({ value: genreType[key], selected: false }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearFilters({ payload: false }));
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ payload: MoviesComponent.getQueryParams(this.activatedRoute) }));
    this.movies$ = this.store.select(selectMovies);
  }

  private triggerFilter(): void {
    this.store.dispatch(
      filterByGenre({
        payload: this.genres.filter(genre => genre.selected).map(genre => genre.value)
      })
    );
  }
}
