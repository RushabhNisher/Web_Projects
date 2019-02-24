import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TodoList } from './app';

import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class AppServices {

    constructor(private http: HttpClient) {
         // var obj;
         // this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    getTodos (): Observable<TodoList[]> {
         return this.http.get<TodoList[]>('https://api.myjson.com/bins/83vd2')
         .pipe();
     }
}
