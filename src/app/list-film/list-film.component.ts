import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Film } from '../film.model';
import { HttpClient } from '@angular/common/http';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  @Input() films!: Film[];
  @Output() edit = new EventEmitter();


  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  EditerFilm(index : number){
    // Pour l'Edition, on va repasser par le component add-or-edit-film avec un output et afficher les valeurs actuels du film selectionné
    this.edit.emit(this.films[index]);
  }

  SupprimerFilm(index: number): void{
    // On récupère l'index de la ligne et on supprime dans le tableau l'element en question
    // this.films.splice(index, 1);
    
    this.filmService.deleteFilm(this.films[index].id).subscribe(deletedFilm=>{
      this.films = this.films.filter(film => this.films[index].id != film.id);
    }); 
    //window.location.reload();

  }

}
