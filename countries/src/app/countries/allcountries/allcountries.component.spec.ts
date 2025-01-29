import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountriesComponent } from './allcountries.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AllcountriesComponent', () => {
  let component: AllcountriesComponent;
  let fixture: ComponentFixture<AllcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllcountriesComponent],
      imports: [MatPaginatorModule, BrowserModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
