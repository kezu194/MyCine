import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Film } from '../film.model';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {

  @Output() rate= new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  bouton= new FormControl("Ajouter Film !")

  filmForm = new FormGroup({
    titre: new FormControl(),
    description: new FormControl(),
    note: new FormControl(),
  });

  sendInfoFilm() {
    this.rate.emit(this.filmForm.value);
  }

}