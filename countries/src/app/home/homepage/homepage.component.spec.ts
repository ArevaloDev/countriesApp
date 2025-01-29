import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { CountryService } from '../../services/country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TitleappComponent } from '../../shared/titleapp/titleapp.component';
import { IsloadingComponent } from '../../shared/isloading/isloading.component';
import { AllcountriesComponent } from '../../countries/allcountries/allcountries.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent, TitleappComponent, IsloadingComponent, AllcountriesComponent],
      imports: [
        HttpClientTestingModule,
         MatInputModule,
         MatPaginatorModule,
         RouterTestingModule,
         ReactiveFormsModule,
         NoopAnimationsModule,
         MatProgressBarModule
        ],
      providers: [CountryService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
