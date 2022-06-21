import { Component, OnInit, Input} from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  @Input() films!: Film[];

  constructor() { }

  ngOnInit(): void {
  }

  getMovie(event: any) {
    console.log(event)
    this.films.push()
  }

  EditerFilm(index : any){
    
  }

  SupprimerFilm(index: any): void{
    this.films.splice(index, 1);
  }

}
