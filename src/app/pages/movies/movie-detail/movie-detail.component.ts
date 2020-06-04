import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovie } from '../../../reducers';
import { ActivatedRoute } from '@angular/router';
import { getMovie } from '../../../actions/movie.actions';
import { Observable } from 'rxjs';
import { Movie } from '../../../types/movie.type';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(getMovie({ payload: movieId }));
    this.movie$ = this.store.select(selectMovie);
  }
}
