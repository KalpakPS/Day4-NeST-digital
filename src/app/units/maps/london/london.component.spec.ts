import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LONDONComponent } from './london.component';

describe('LONDONComponent', () => {
  let component: LONDONComponent;
  let fixture: ComponentFixture<LONDONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LONDONComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LONDONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
