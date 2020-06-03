import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovies } from '../../../reducers';
import { loadMovies } from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { Movies } from '../../../types/movie.type';
import { ActivatedRoute } from '@angular/router';
import { genreType, GenreType } from '../../../types/genre.type';
import { filterByGenre } from '../../../actions/filters.actions';

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
export class MoviesComponent implements OnInit {
  private static getQueryParams(activatedRoute: ActivatedRoute): { text: string; genres: GenreType[] } {
    const text = activatedRoute.snapshot.queryParams?.text;
    const genres = activatedRoute.snapshot.queryParams?.genres.split(',');
    return { text, genres };
  }

  genres: GenreFilter[];
  movies$: Observable<Movies>;

  onGenreClick(genre: GenreFilter): void {
    genre.selected = !genre.selected;
    this.triggerFilter();
  }

  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {
    this.genres = Object.keys(genreType).map(key => ({ value: genreType[key], selected: false }));
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
