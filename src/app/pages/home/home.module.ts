import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { homeFeatureKey, reducers } from './store/reducers';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(homeFeatureKey, reducers),
    EffectsModule.forFeature([HomeEffects]),
    SharedModule
  ]
})
export class HomeModule {}
