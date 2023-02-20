import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private http:HttpClient) { }
  getUser()
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users?username=Bret');
  }
  getPostsByUserId(id : number)
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  getAlbumsByUserId(id : number)
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  }
}
