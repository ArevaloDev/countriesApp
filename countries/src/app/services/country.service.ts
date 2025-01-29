import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries} from '../interfaces/countries.interface';
import { catchError, map, of} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url:string = 'https://restcountries.com/v3.1';
  constructor(
    private http:HttpClient,
    private snackBar: MatSnackBar
  ) { }


  getAllCountries = () => {
    return this.http.get<Countries[]>(`${this.url}/all`).pipe(
      map((countries) => countries.slice(0, 100).map((country) => ({
        name: country.name?.common,
        continents: country.continents,
        capital: country.capital,
        population: country.population,
        altSpellings: country.altSpellings,
        flags: country.flags
      }))),

      catchError(() => {
        this.showErrorNotification('Error al obtener los paises');
        return of([]);
      }),
    )
  }

  getCountryByName = (name:string) => {
    return this.http.get<Countries[]>(`${this.url}/name/${name}?fullText=true`).pipe(
        map((countries) => countries.map((country) => ({
        name: country.name?.common,
        continents: country.continents,
        capital: country.capital,
        population: country.population,
        altSpellings: country.altSpellings,
        flags: country.flags
      }))),

      catchError(() => {
        this.showErrorNotification('Error al obtener los datos del país');
        return of([]);
      }),
  )
  }

  showErrorNotification(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000, // Tiempo en milisegundos (3 segundos)
      horizontalPosition: 'center', // Posición horizontal
      verticalPosition: 'bottom', // Posición vertical
      panelClass: ['snackbar-error'] // Clase CSS personalizada
    });
  }
}
