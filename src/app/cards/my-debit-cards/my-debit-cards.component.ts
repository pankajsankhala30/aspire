import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { Card } from '../shared/interfaces/Cards.interface';

@Component({
  selector: 'app-my-debit-cards',
  standalone: true,
  imports: [
    MaterialModule,
    DebitCardComponent,
    RecentTransactionsComponent,
    CardDetailsComponent,
  ],
  templateUrl: './my-debit-cards.component.html',
  styleUrl: './my-debit-cards.component.scss',
})
export class MyDebitCardsComponent implements OnInit {
  @Input() parentData:Card[] = [];
  ngOnInit(){
  }
}
