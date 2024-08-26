import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { MyDebitCardsComponent } from './my-debit-cards/my-debit-cards.component';
import { AddCardComponent } from './add-card/add-card.component';
import { MatDialog } from '@angular/material/dialog';
import { CardsService } from './shared/services/cards.service';
import { Card } from './shared/interfaces/Cards.interface';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaterialModule, MyDebitCardsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers: [CardsService],
})
export class CardsComponent {
  constructor(public dialog: MatDialog,private localstorageService:LocalstorageService) {}
  cards: Card[] = [];
  openAddCardDialog(): void {
    const dialogRef = this.dialog.open(AddCardComponent);
      dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let cardsData:Card[] = this.localstorageService.getItem('cards') || [];
        cardsData.unshift(result);
        this.localstorageService.setItem('cards',cardsData);
        this.cards = cardsData;
        // this.cards.push(result);
      }
    });
  }
}
