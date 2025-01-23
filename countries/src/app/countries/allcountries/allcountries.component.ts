import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrl: './allcountries.component.css'
})
export class AllcountriesComponent implements OnInit {

  constructor(private countryServices:CountryService){}

  ngOnInit() {
      this.countryServices.getAllCountries();
  }
}
