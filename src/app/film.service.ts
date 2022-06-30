import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _filmListUrl = 'http://localhost:3000/film';

  constructor(private _httpClient: HttpClient) { }

  postFilm(event: Film){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(event)
    return this._httpClient.post<Film>(this._filmListUrl, body, {'headers':headers})
  }

  getFilm(){
    return this._httpClient.get<Film[]>(this._filmListUrl)
  }
  
  deleteFilm(id: any){
    return this._httpClient.delete<Film>(this._filmListUrl+"/"+id)
  }

}
