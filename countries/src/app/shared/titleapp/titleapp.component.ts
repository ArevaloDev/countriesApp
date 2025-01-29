import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import {  Country} from '../../interfaces/countries.interface';

@Component({
  selector: 'app-titleapp',
  templateUrl: './titleapp.component.html',
  styleUrl: './titleapp.component.css'
})
export class TitleappComponent implements OnInit {

  public form!:FormGroup;
  public isLoading:boolean = false;
  @Output() sendCountry = new EventEmitter<Country[]>();
  constructor(
    private countryServices:CountryService,
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.form = this.fb.group({
      countryName: ['']
    })
  }


  getCountryByName = () => {
    this.isLoading = true;
    const value = this.form.get('countryName')?.value;
    if(!value) return;
    this.countryServices.getCountryByName(value).subscribe(response => {
      this.sendCountry.emit(response);
      this.isLoading = false;
    })
  }


}
