import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USAComponent } from './usa.component';

describe('USAComponent', () => {
  let component: USAComponent;
  let fixture: ComponentFixture<USAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [USAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
