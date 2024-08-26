import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { CardActionsComponent } from '../card-actions/card-actions.component';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from '../../add-card/add-card.component';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../shared/services/cards.service';
import { Card } from '../../shared/interfaces/Cards.interface';
import { HttpClientModule } from '@angular/common/http';
import { LocalstorageService } from '../../../shared/services/localstorage.service';

@Component({
  selector: 'app-debit-card',
  standalone: true,
  imports: [
    MaterialModule,
    CardActionsComponent,
    AddCardComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.scss',
  providers: [CardsService],
})
export class DebitCardComponent implements OnInit, OnChanges {
  constructor(private cardsService: CardsService, private localStorageService:LocalstorageService) {}
  cards: Card[] = [];
  selectedCardData!: Card;
  showFullCardNumber = false;

  currentSlide = 0;
  @Input() parentDataCards:Card[] = [];

  ngOnInit() {
    const localCardData = this.localStorageService.getItem('cards');
    if(!localCardData){
      this.cardsService.getCards().subscribe((data) => {
        this.cards = data.cards; // Assign the data from the JSON file
        this.localStorageService.setItem('cards',this.cards);
        this.selectedCardData = data.cards[0];

      });
    }else{
      let cardsData:Card[] = this.localStorageService.getItem('cards') || [];
      this.cards = cardsData;
      this.selectedCardData = this.cards[0];

    }
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.parentDataCards.length) {
      this.cards = this.parentDataCards;
      this.selectedCardData = this.cards[0];
    }
  }
  selectSlide(index: number) {
    this.currentSlide = index;
    this.selectedCardData = this.cards[index];
   
  }
  getCardNumber(cardNumber:string | undefined): string {
    if (this.showFullCardNumber) {
      return cardNumber || '';
    }
    return '**** **** **** ' + cardNumber?.slice(-4);
  }
  toggleCardNumberVisibility(): void {
    this.showFullCardNumber = !this.showFullCardNumber;
  }
  receivedData!: Card;

  handleData(data: any): void {
    // Assign the received data
    this.receivedData = data;
  
    // Check if receivedData has the expected properties
    if (this.receivedData?.number) {
      // Update card status if the number matches
      this.cards = this.cards.map(card => {
        if (card.number === this.receivedData.number) {
          return { ...card, status: card.status === 1 ? 0 : 1 };
        }
        return card;
      });
  
      // Save updated cards to local storage
      this.localStorageService.setItem('cards', this.cards);
    }
  }
  
  
}
