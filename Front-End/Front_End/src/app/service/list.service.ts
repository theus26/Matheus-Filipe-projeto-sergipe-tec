import { Injectable } from '@angular/core';
import { Contribuentes } from '../Contribuentes';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/Contribuintes'

  constructor(private http: HttpClient) { }

  remove(id:number){
    return this.http.delete<Contribuentes>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<Contribuentes[]>{
    return this.http.get<Contribuentes[]>(this.apiUrl)
  }

  loadByID(id){
    return this.http.get(`${this.apiUrl}/ ${id}`);
  }
}
