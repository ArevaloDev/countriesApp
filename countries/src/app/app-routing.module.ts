import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './countries/search/search.component';
import { AllcountriesComponent } from './countries/allcountries/allcountries.component';

const routes: Routes = [
  {path: 'home', component:AllcountriesComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
