import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private jsonUrl = '/assets/json/cards.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
