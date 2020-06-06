import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { LoaderModule } from '../../../../modules/loader/loader.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, MovieDetailRoutingModule, LoaderModule]
})
export class MovieDetailModule {}
