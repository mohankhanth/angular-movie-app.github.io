import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'movies', component: MoviesComponent},
  {path:'movie/:id', component: MovieDetailsComponent},
  {path:'tvshows', component: TvshowsComponent},
  {path:'genres/:genresId', component: GenresComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
