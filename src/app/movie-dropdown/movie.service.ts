import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Response, RequestOptions, URLSearchParams, Http} from "@angular/http";


@Injectable()
export class MovieService {


  private APIKey:string = '9eb71bd48f9574238b5924994084f5b3';
  private topRatedMoviesURL: string = 'https://api.themoviedb.org/3/movie/top_rated';

  constructor(private http: Http) {}

  public getTopRatedMovies(): Observable<any> {
    //api_key=9eb71bd48f9574238b5924994084f5b3&language=en-US&page=1
    let requestParams = new URLSearchParams;
    requestParams.set('api_key', this.APIKey);
    requestParams.set('language', 'en-US');
    requestParams.set('page', '1');
    let requestOptions = new RequestOptions();
    requestOptions.params = requestParams;
    return this.http.get(this.topRatedMoviesURL, requestOptions);
  }
}
