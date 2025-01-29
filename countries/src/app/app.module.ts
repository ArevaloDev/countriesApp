import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AllcountriesComponent } from './countries/allcountries/allcountries.component';
import { CountrydetailsComponent } from './countries/countrydetails/countrydetails.component';
import { MaterialModule } from './material.module';
import { TitleappComponent } from './shared/titleapp/titleapp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsloadingComponent } from './shared/isloading/isloading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AllcountriesComponent,
    CountrydetailsComponent,
    TitleappComponent,
    IsloadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
