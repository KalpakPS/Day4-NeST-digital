import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreospaceComponent } from './areospace.component';

describe('AreospaceComponent', () => {
  let component: AreospaceComponent;
  let fixture: ComponentFixture<AreospaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreospaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreospaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
