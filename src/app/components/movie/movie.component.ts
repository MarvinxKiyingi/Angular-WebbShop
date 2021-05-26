import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }
}
