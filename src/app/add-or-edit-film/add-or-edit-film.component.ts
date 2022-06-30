import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Film } from '../film.model';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {

  @Output() rate= new EventEmitter();
  @Input() film_to_edit! : Film;

  constructor() {}
  ngOnInit(): void {}

  bouton= new FormControl("Ajouter Film !")

  filmForm = new FormGroup({
    titre: new FormControl(),
    description: new FormControl(),
    note: new FormControl(),
  });

  sendInfoFilm() {
    // We send the given string of the form as a Dictionary (Object) to the parent component
    this.rate.emit(this.filmForm.value);
  }

}
