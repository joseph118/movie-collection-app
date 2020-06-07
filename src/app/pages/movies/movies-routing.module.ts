import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/movie-list/movie-list.module').then(m => m.MovieListModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
