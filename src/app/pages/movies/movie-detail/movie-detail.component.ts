import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovie } from '../../../reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { getMovie } from '../../../actions/movie.actions';
import { Observable } from 'rxjs';
import { Movie } from '../../../types/movie.type';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private store: Store<ApplicationState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  onBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const movieId = Number.parseInt(this.activatedRoute.snapshot.params.id);

    if (!Number.isNaN(movieId)) {
      this.store.dispatch(getMovie({ payload: movieId }));
      this.movie$ = this.store.select(selectMovie);
    } else {
      this.router.navigate(['/']);
    }
  }
}
