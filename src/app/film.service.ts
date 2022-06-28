import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _filmListUrl = 'http://localhost:3000/film';

  constructor(private _httpClient: HttpClient) { }

  PostFilm(event: any){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(event)
    return this._httpClient.post(this._filmListUrl, body, {'headers':headers})
  }

  GetFilm(){
    return this._httpClient.get<Film[]>(this._filmListUrl)
  }
  
  DeleteFilm(id: any){
    return this._httpClient.delete(this._filmListUrl+"/"+id)
  }

}
