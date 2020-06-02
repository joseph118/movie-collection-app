import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
