import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies } from './store/actions/movies.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { genreList } from '../../../../models/genre.model';
import { Movie, Movies } from '../../../../models/movie.model';
import { getMovieList, getMovieListError, getMovieListLoading, State } from './store/reducer';
import { FilterUtils } from './utils/filter-utils';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movies>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const filters = FilterUtils.getFilterQueryParams(this.activatedRoute, genreList);
    this.store.dispatch(getMovies({ payload: filters }));
    this.movies$ = this.store.select(getMovieList);
    this.loading$ = this.store.select(getMovieListLoading);
    this.error$ = this.store.select(getMovieListError);
  }

  trackMovieBy(index: number, item: Movie): number {
    return item.id;
  }
}
