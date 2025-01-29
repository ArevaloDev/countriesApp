import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleappComponent } from './titleapp.component';
import { CountryService } from '../../services/country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IsloadingComponent } from '../isloading/isloading.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TitleappComponent', () => {
  let component: TitleappComponent;
  let fixture: ComponentFixture<TitleappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleappComponent, IsloadingComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers:[CountryService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
