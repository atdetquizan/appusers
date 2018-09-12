import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  apiURL: String;
  constructor(
    private http: HttpClient
  ) {
    this.apiURL = `${environment.apiUrl}users`;
  }

  getPages(page: number) {
    return this.http.get<any>(`${this.apiURL}?page=${page}`);
  }

  getById(userId: number) {
    return this.http.get<any>(`${this.apiURL}/${userId}`);
  }

  insert(parameters: any) {
    return this.http.post<any>(`${this.apiURL}`, parameters);
  }

  update(userId: number, parameters: any) {
    return this.http.put<any>(`${this.apiURL}/${userId}`, parameters);
  }
}
