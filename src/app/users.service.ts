import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<User[]> {
    
    return this.httpClient.get<User[]>('http://localhost:3306/user');
  }

  create(payload: User) {
    return this.httpClient.post<User>(
      'http://localhost:3306/user',
      payload
    );
  }

  getById(id: number): Observable<User[]> {
    
    return this.httpClient.get<User[]>(`http://localhost:3306/user/${id}`);

  }

  update(payload: User): Observable<User> {
    return this.httpClient.put<User>(
      `http://localhost:3306/user/${payload.IDUser}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3306/user/${id}`);
  }
}
