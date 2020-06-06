import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterBarComponent } from './movies/filter-bar/filter-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesFeatureKey, reducers } from './store/reducer';
import { MoviesEffects } from './store/effects/movies.effects';
import { FiltersEffects } from './store/effects/filters.effects';

@NgModule({
  declarations: [MoviesComponent, FilterBarComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature(moviesFeatureKey, reducers),
    EffectsModule.forFeature([MoviesEffects, FiltersEffects]),
    SharedModule,
    FormsModule
  ]
})
export class MoviesModule {}
