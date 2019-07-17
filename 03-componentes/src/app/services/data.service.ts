import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/componente';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getOpcionesMenu() {
    return this.httpClient.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbunes() {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  
  getHeroes() {
    return this.httpClient.get<any[]>('/assets/data/superheroes.json')
        .pipe(
          delay(1500)
        );
  }
}

