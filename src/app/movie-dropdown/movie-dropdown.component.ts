import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MovieService} from "./movie.service";
import Movie from "../_classes/movie.class";

@Component({
  selector: 'app-movie-dropdown',
  templateUrl: './movie-dropdown.component.html',
  styleUrls: ['./movie-dropdown.component.scss']
})
export class MovieDropdownComponent implements OnInit {

  private selectedMovie: Movie;
  public movies: any[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getTopRatedMovies()
      .subscribe((data: any) => {
          data = data.json();
          console.log(data);
          this.movies = data.results.map((movie) => new Movie(movie))
        },
        (error: any) => {
          this.movies = null;
          console.error(error);
        });
  }

  public onMovieSelected(movie: any) {
    this.selectedMovie = movie as Movie;
  }

}
