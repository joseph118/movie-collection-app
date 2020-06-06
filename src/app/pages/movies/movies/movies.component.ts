import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMovies } from '../store/actions/movies.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { genreList } from '../../../models/genre.model';
import { Movies } from '../../../models/movie.model';
import { FilterUtils } from '../utils/filter-utils';
import { getMovieList, getMovieListError, getMovieListLoading, State } from '../store/reducer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movies>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const filters = FilterUtils.getFilterQueryParams(this.activatedRoute, genreList);
    this.store.dispatch(loadMovies({ payload: filters }));
    this.movies$ = this.store.select(getMovieList);
    this.loading$ = this.store.select(getMovieListLoading);
    this.error$ = this.store.select(getMovieListError);
  }
}
