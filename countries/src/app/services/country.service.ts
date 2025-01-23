import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/countries.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries:any[] = [];
  private url:string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }


  getAllCountries = () => {
    return this.http.get<Country[]>(`${this.url}/all`).pipe(
      map((countries) => countries.slice(0, 100))
    )
  }
}
