import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovies } from '../../../reducers';
import { loadMovies } from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { Movies } from '../../../types/movie.type';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movies>;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
    this.movies$ = this.store.select(selectMovies);
  }
}
