import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Movie } from 'src/app/model/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<Movie[]>();
  movies$ = this.movies.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(): void {
    if (!localStorage.getItem('Movies')) {
      this.http
        .get<Movie[]>(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
        )
        .subscribe((data) => {
          this.movies.next(data);
          localStorage.setItem('Movies', JSON.stringify(data));
        });
    } else {
      this.movies.next(JSON.parse(localStorage.getItem('Movies')));
    }
  }
  getMoviesId(movieID: number): Movie {
    let movies: Movie[] = JSON.parse(localStorage.getItem('Movies'));
    return movies.filter((mId) => mId.id == movieID)[0];
  }
}
