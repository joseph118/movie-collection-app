import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectMovies } from '../../../reducers';
import { loadMovies } from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { Movies } from '../../../types/movie.type';
import { ActivatedRoute } from '@angular/router';
import { GenreType } from '../../../types/genre.type';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  private static getQueryParams(activatedRoute: ActivatedRoute): { text: string; genres: GenreType[] } {
    const text = activatedRoute.snapshot.queryParams?.text;
    const genres = []; // TODO
    return { text, genres };
  }

  movies$: Observable<Movies>;

  constructor(private store: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ payload: MoviesComponent.getQueryParams(this.activatedRoute) }));
    this.movies$ = this.store.select(selectMovies);
  }
}
