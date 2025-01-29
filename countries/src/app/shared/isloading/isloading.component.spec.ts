import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsloadingComponent } from './isloading.component';

describe('IsloadingComponent', () => {
  let component: IsloadingComponent;
  let fixture: ComponentFixture<IsloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsloadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
