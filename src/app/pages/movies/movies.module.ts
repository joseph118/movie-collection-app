import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { FilterBarComponent } from './movies/filter-bar/filter-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesFeatureKey, reducers } from './store/reducer';
import { MoviesEffects } from './store/effects/movies.effects';
import { FiltersEffects } from './store/effects/filters.effects';
import { LoaderModule } from '../../modules/loader/loader.module';
import { VideoCardModule } from '../../modules/video-card/video-card.module';

@NgModule({
  declarations: [MoviesComponent, FilterBarComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature(moviesFeatureKey, reducers),
    EffectsModule.forFeature([MoviesEffects, FiltersEffects]),
    LoaderModule,
    VideoCardModule,
    FormsModule
  ]
})
export class MoviesModule {}
