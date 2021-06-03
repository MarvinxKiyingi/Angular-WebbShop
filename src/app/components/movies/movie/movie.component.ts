import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movieItem: Movie;
  // @Output() selectedMovie = new EventEmitter<Movie>();

  constructor(private cartService: CartService, private router: Router) {}
  // constructor() {}

  ngOnInit(): void {}
  showSpecifics(): void {
    console.log('show more');
    this.router.navigate(['movie', this.movieItem.id]);
  }
}
