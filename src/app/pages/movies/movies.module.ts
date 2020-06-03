import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { VideoCardComponent } from './movies/video-card/video-card.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, VideoCardComponent],
  imports: [CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
