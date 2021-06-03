import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-movie-specifics',
  templateUrl: './movie-specifics.component.html',
  styleUrls: ['./movie-specifics.component.scss'],
})
export class MovieSpecificsComponent implements OnInit {
  id: number = 0;
  movieItem: Movie;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.movieItem = this.movieService.getMoviesId(this.id);
    });
  }
  handleBackToHome(): void {
    this.router.navigate(['/']);
    console.log('back tohome was clicked');
  }
}
