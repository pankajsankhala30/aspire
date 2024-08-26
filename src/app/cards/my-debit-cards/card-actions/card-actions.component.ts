import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { MatDialog } from '@angular/material/dialog';
import { FreezeCardComponent } from '../../freeze-card/freeze-card.component';
import { Card } from '../../shared/interfaces/Cards.interface';

@Component({
  selector: 'app-card-actions',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card-actions.component.html',
  styleUrl: './card-actions.component.scss',
})
export class CardActionsComponent implements OnInit, OnChanges{
  @Input()
  cardIndexData!: Card;
  @Output() dataEmitter = new EventEmitter<string>();

  ngOnInit() {
   
  }
  ngOnChanges(): void {
  }
  constructor(public dialog: MatDialog) {}
  openFreezeCardDialog(): void {
    const dialogRef = this.dialog.open(FreezeCardComponent, {
      data: {
        ...this.cardIndexData
      }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataEmitter.emit(result);
        console.log(this.cardIndexData)
        this.cardIndexData.status = this.cardIndexData?.status ? 0 : 1;

        // Handle the result if needed
      }
    });
  }
  

}
