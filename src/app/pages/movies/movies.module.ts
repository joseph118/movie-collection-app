import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterBarComponent } from './movies/filter-bar/filter-bar.component';

@NgModule({
  declarations: [MoviesComponent, FilterBarComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, FormsModule]
})
export class MoviesModule {}
