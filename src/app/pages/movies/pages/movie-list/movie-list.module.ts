import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { MovieListComponent } from './movie-list.component';
import { LoaderModule } from '../../../../modules/loader/loader.module';
import { VideoCardModule } from '../../../../modules/video-card/video-card.module';
import { FormsModule } from '@angular/forms';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../../store/effects/movies.effects';
import { FiltersEffects } from '../../store/effects/filters.effects';
import { moviesFeatureKey, reducers } from '../../store/reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [MovieListComponent, FilterBarComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    LoaderModule,
    VideoCardModule,
    FormsModule,
    StoreModule.forFeature(moviesFeatureKey, reducers),
    EffectsModule.forFeature([MoviesEffects, FiltersEffects])
  ]
})
export class MovieListModule {}
