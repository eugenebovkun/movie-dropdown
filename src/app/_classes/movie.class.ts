export default class Movie {
  id: number;
  vote_count: number;
  video: boolean;
  vote_average: string;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;

  constructor(movie: {
    id: number;
    vote_count: number;
    video: boolean;
    vote_average: string;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: Date;
  }) {
    this.id = movie.id;
    this.vote_count = movie.vote_count;
    this.video = movie.video;
    this.vote_average = movie.vote_average;
    this.title = movie.title;
    this.popularity = movie.popularity;
    this.poster_path = movie.poster_path;
    this.original_language = movie.original_language;
    this.original_title = movie.original_title;
    this.genre_ids = movie.genre_ids;
    this.backdrop_path = movie.backdrop_path;
    this.adult = movie.adult;
    this.overview = movie.overview;
    this.release_date = new Date(movie.release_date);
  }
}
