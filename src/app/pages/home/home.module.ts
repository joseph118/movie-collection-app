import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TopRatedMoviesEffects } from './store/top-rated-movies.effects';
import { homeFeatureKey, reducers } from './store/reducers';
import { VideoCardModule } from '../../modules/video-card/video-card.module';
import { LoaderModule } from '../../modules/loader/loader.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(homeFeatureKey, reducers),
    EffectsModule.forFeature([TopRatedMoviesEffects]),
    VideoCardModule,
    LoaderModule
  ]
})
export class HomeModule {}
