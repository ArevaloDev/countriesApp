import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TitleappComponent } from './shared/titleapp/titleapp.component';
import { IsloadingComponent } from './shared/isloading/isloading.component';
import { AllcountriesComponent } from './countries/allcountries/allcountries.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatProgressBarModule
      ],
      declarations: [
        AppComponent,
        HomepageComponent,
        TitleappComponent,
        IsloadingComponent,
        AllcountriesComponent,


      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'countries'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('countries');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Countries App');
  });
});
