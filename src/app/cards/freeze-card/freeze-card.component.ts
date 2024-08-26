import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/modules/material.module';
import { Card } from '../shared/interfaces/Cards.interface';

@Component({
  selector: 'app-freeze-card',
  standalone: true,
  imports:  [MaterialModule, 
    MatButtonModule],
  templateUrl: './freeze-card.component.html',
  styleUrl: './freeze-card.component.scss'
})
export class FreezeCardComponent {
  submit() {
    this.dialogRef.close(this.data);
  }
  constructor(
    public dialogRef: MatDialogRef<FreezeCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Card 
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
