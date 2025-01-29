import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrl: './allcountries.component.css'
})
export class AllcountriesComponent implements  OnChanges {

  @Input() countries:Country[] = [];
  public paginatedCountries: Country[] = [];
  public pageSize:number = 10;
  public currentPage:number = 0;
  constructor(private router:Router){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.countries);
    this.updatePaginatedCountries();
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
