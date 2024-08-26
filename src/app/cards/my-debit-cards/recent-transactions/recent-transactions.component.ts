import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
})
export class RecentTransactionsComponent {
  transactions = [
    {
      icon: 'shopping_bag',
      iconColor: '#B3E5FC',
      title: 'Hamleys',
      date: '20 May 2020',
      subTitle: 'Refund on debit card',
      amount: 150,
    },
    {
      icon: 'flight',
      iconColor: '#C8E6C9',
      title: 'Hamleys',
      date: '20 May 2020',
      subTitle: 'Charged to debit card',
      amount: -150,
    },
    {
      icon: 'campaign',
      iconColor: '#FFCDD2',
      title: 'Hamleys',
      date: '20 May 2020',
      subTitle: 'Charged to debit card',
      amount: -150,
    },
  ];
}
