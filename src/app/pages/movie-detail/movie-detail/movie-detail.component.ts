import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectMovie, selectMovieError, selectMovieLoading } from '../../../reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { getMovie } from '../../../actions/movie.actions';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  onBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params.id;
    this.loading$ = this.store.select(selectMovieLoading);
    this.error$ = this.store.select(selectMovieError);

    if (movieId) {
      this.store.dispatch(getMovie({ payload: movieId }));
      this.movie$ = this.store.select(selectMovie);
    } else {
      this.router.navigate(['/']);
    }
  }
}
