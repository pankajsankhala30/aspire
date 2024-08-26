import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeCardComponent } from './freeze-card.component';

describe('FreezeCardComponent', () => {
  let component: FreezeCardComponent;
  let fixture: ComponentFixture<FreezeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreezeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreezeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
