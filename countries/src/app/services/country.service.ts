import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url:string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }


  getAllCountries = () => {
    return this.http.get(`${this.url}/all`).subscribe(response => {
      console.log(response);

    })
  }
}
