import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionsComponent } from './card-actions.component';

describe('CardActionsComponent', () => {
  let component: CardActionsComponent;
  let fixture: ComponentFixture<CardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
