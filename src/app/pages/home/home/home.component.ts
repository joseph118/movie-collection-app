import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ApplicationState,
  selectTopRatedMovies,
  selectTopRatedMoviesError,
  selectTopRatedMoviesLoading
} from '../../../reducers';
import { loadTopRatedMovies } from '../../../actions/home.actions';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Movies } from '../../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  topRatedMovies$: Observable<Movies>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  ngOnInit(): void {
    this.store.dispatch(loadTopRatedMovies({ payload: environment.home.numberOfTopRatedElements }));
    this.topRatedMovies$ = this.store.select(selectTopRatedMovies);
    this.loading$ = this.store.select(selectTopRatedMoviesLoading);
    this.error$ = this.store.select(selectTopRatedMoviesError);
  }
}
