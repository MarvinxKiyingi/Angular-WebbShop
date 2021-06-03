import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart/cart.service';
import { MovieService } from 'src/app/service/movie/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe((data) => {
      this.movies = data;
    });
    this.movieService.getMovies();
  }
  handleSelectedMovie(aMovie: Movie): void {
    this.selectedMovie = aMovie;
    console.log('sending this: ', this.selectedMovie);
    this.cartService.addToCart(this.selectedMovie);
  }
}
