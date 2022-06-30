import { HttpClient } from '@angular/common/http';
import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { Film } from './film.model';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyCine';
  films : Film[] = [];
  film_to_edit! : Film;
  
  constructor(private filmService: FilmService){}
  ngOnInit(): void {
    this.filmService.getFilm()
      .subscribe(data => {
        this.films=data;
      })
  }

  onRate(event: Film) {
    // We push in our list of Film the event which is the new created film
    this.filmService.postFilm(event).subscribe(film=>{
      this.films.push(film)

    });
  }

  onEdit(event: Film) {
    console.log(event);
    this.film_to_edit = event;
  }

  editFilmToForm = (film: Film) : void => {
    console.log("Prout")
  }

}


