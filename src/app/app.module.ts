import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieDropdownComponent } from './movie-dropdown/movie-dropdown.component';
import { MovieService } from './movie-dropdown/movie.service';
import { DropdownComponent } from './shared/dropdown/dropdown.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieDropdownComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
