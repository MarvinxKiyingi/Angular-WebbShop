import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((data) => {
      this.movies = data;

      console.log(this.movies);
    });

    this.service.getMovies();
  }
}
