import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';


const routes: Routes = [
    {
        path: 'list',
        component: MovieListComponent
    },
    {
        path: 'detail/:id',
        component: MovieDetailComponent
    },
    {
        path: '**',
        redirectTo: 'detail',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
