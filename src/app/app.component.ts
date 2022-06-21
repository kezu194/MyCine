import { Component, Input, EventEmitter } from '@angular/core';
import { Film } from './film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';

  films : Film[] = [];

  onRate(event: any) {
    // We push in our list of Film the event which is the new created film
    this.films.push(event);
  }




}


