import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  @Input() films!: Film[];
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  EditerFilm(index : any){
    // Pour l'Edition, on va repasser par le component add-or-edit-film avec un output et afficher les valeurs actuels du film selectionné
    this.edit.emit(this.films[index])
  }

  SupprimerFilm(index: any): void{
    // On récupère l'index de la ligne et on supprime dans le tableau l'element en question
    this.films.splice(index, 1);
  }

}
