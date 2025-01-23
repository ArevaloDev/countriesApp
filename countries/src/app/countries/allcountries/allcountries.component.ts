import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrl: './allcountries.component.css'
})
export class AllcountriesComponent implements OnInit {

  public countries:Country[] = [];
  public paginatedCountries: Country[] = [];
  public pageSize:number = 10;
  public currentPage:number = 0;
  constructor(private countryServices:CountryService){}

  ngOnInit() {
    this.countryServices.getAllCountries().subscribe(response => {
      this.countries = response;
      console.log(this.countries);
      this.updatePaginatedCountries();
    })
  }

  onPageChange = (event:PageEvent) => {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedCountries();
  }


  updatePaginatedCountries = ():void => {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCountries = this.countries.slice(startIndex, endIndex)
  }
}
