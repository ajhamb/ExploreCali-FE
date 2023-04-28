import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

    constructor(private http:HttpClient) {}

    private baseUrl:string = 'http://localhost:8080';
    private toursURL:string = this.baseUrl + '/tours';
    private toursPackageUrl:string =  this.baseUrl + '/tourPackages';

    getTours() : Observable<Tour[]> {
      return this.http.get<Tour[]>(this.toursURL);
    }
}

export class Tour {
  id:string;
  title:string;
  price:string;

  constructor(id:string, title:string, price:string) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
