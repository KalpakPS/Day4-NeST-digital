import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INDIAComponent } from './india.component';

describe('INDIAComponent', () => {
  let component: INDIAComponent;
  let fixture: ComponentFixture<INDIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [INDIAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(INDIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
