import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Movies } from '../../../models/movie.model';
import * as fromHome from '../store/reducers';
import { loadTopRatedMovies } from '../store/top-rated-movies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<fromHome.State>) {}

  topRatedMovies$: Observable<Movies>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  ngOnInit(): void {
    this.store.dispatch(loadTopRatedMovies({ payload: environment.home.numberOfTopRatedElements }));
    this.topRatedMovies$ = this.store.select(fromHome.getTopRatedMovies);
    this.loading$ = this.store.select(fromHome.getTopRatedMoviesLoading);
    this.error$ = this.store.select(fromHome.getTopRatedMoviesError);
  }
}
