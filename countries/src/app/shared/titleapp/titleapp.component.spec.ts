import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleappComponent } from './titleapp.component';

describe('TitleappComponent', () => {
  let component: TitleappComponent;
  let fixture: ComponentFixture<TitleappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleappComponent]
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
