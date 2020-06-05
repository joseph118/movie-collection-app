import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovies } from '../../../reducers';
import { loadMovies } from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { genreList } from '../../../models/genre.model';
import { Movies } from '../../../models/movie.model';
import { FilterUtils } from '../../../utils/filter-utils';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movies>;

  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const filters = FilterUtils.getFilterQueryParams(this.activatedRoute, genreList);
    this.store.dispatch(loadMovies({ payload: filters }));
    this.movies$ = this.store.select(selectMovies);
  }
}
