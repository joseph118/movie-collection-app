import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { LoaderModule } from '../../../../modules/loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { movieDetailFeatureKey, reducers } from './store/reducers';
import { MovieDetailEffects } from './store/movie-detail.effects';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    StoreModule.forFeature(movieDetailFeatureKey, reducers),
    EffectsModule.forFeature([MovieDetailEffects]),
    LoaderModule
  ]
})
export class MovieDetailModule {}
