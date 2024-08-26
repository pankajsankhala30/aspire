import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDebitCardsComponent } from './my-debit-cards.component';

describe('MyDebitCardsComponent', () => {
  let component: MyDebitCardsComponent;
  let fixture: ComponentFixture<MyDebitCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDebitCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDebitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
