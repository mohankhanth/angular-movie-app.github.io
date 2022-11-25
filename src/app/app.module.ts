import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';

import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BannerItemsComponent } from './components/banner-items/banner-items.component';
import { ItemsComponent } from './components/items/items.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { VideoImagesComponent } from './components/video-images/video-images.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    GenresComponent,
    SliderComponent,
    BannerItemsComponent,
    ItemsComponent,
    MovieDetailsComponent,
    VideoEmbedComponent,
    VideoImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    PaginationModule,
    TabsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
