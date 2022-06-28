import { HttpClient } from '@angular/common/http';
import { Component, Input, EventEmitter } from '@angular/core';
import { Film } from './film.model';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';
  films : Film[] = [];
  new_film: Film = new Film()
  
  constructor(private filmService: FilmService){}

  onRate(event: any) {
    // We push in our list of Film the event which is the new created film
    this.filmService.PostFilm(event).subscribe();

    this.RefreshFilms();
  }

  RefreshFilms(){
    this.filmService.GetFilm()
      .subscribe(data => {
        console.log(data);
        this.films=data;
      })
  }

  addFilm() {
    this.filmService.PostFilm(this.new_film)
      .subscribe(data => {
        console.log(data);
        this.RefreshFilms();
      })      
  }


}


