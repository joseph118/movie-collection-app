import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Movie } from '../../../../../models/movie.model';
import { getMovieDetail, getMovieDetailError, getMovieDetailLoading, State } from '../store/reducers';
import { getMovieDetail as getMovieDetailAction } from '../store/movie-detail.actions';

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
    this.loading$ = this.store.select(getMovieDetailLoading);
    this.error$ = this.store.select(getMovieDetailError);

    if (movieId) {
      this.store.dispatch(getMovieDetailAction({ payload: movieId }));
      this.movie$ = this.store.select(getMovieDetail);
    } else {
      this.router.navigate(['/']);
    }
  }
}
