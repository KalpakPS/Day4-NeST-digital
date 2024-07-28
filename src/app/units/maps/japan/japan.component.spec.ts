import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JAPANComponent } from './japan.component';

describe('JAPANComponent', () => {
  let component: JAPANComponent;
  let fixture: ComponentFixture<JAPANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JAPANComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JAPANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
