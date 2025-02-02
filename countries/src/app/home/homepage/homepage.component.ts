import { Component, OnInit } from '@angular/core';
import { Countries, Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  public countriesHome:Country[] = [];
  public isLoading:boolean = false;

  constructor(private countryServices:CountryService){}

  ngOnInit() {
      this.getAllCountries();
  }

  getAllCountries = () => {
    this.isLoading = true;
    this.countryServices.getAllCountries().subscribe((response) => {
      this.countriesHome = response;
      this.isLoading = false;
    })
  }

  justCountry = (event:Country[]) => {
    if(!event) {
      this.getAllCountries();
    }
    this.countriesHome = event;
  }

}
