import { MaterialModule } from '../../shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [MaterialModule, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss',
})
export class AddCardComponent {
  cardName: string = '';
  generateRandomCardNumber(): string {
    let cardNumber = '';
    
    for (let i = 0; i < 16; i++) {
      // Generate a random digit between 0 and 9
      const digit = Math.floor(Math.random() * 10);
      cardNumber += digit;
  
      // Add a space after every 4th digit
      if ((i + 1) % 4 === 0 && i !== 15) {
        cardNumber += ' ';
      }
    }
    
    return cardNumber;
  }
  
  generateRandomExpirationDate(): string {
    const month = ('0' + Math.floor(Math.random() * 12 + 1)).slice(-2);
    const year = (new Date().getFullYear() + Math.floor(Math.random() * 5))
      .toString()
      .slice(-2);
    return `${month}/${year}`;
  }
  generateRandomCVV(): string {
    // Generate a random number between 100 and 999 (inclusive)
    const cvv = Math.floor(100 + Math.random() * 900);
    return cvv.toString();
  }
  generateRandomCardBrand(): string {
    // Array of possible card brands
    const brands = ['VISA', 'MasterCard', 'American Express'];
    
    // Randomly select a brand from the array
    const randomIndex = Math.floor(Math.random() * brands.length);
    return brands[randomIndex];
  }
  
  submit() {
    const newCard = {
      name: this.cardForm.value.name,
      number: this.generateRandomCardNumber(),
      validity: this.generateRandomExpirationDate(),
      cvv: this.generateRandomCVV(),
      brand: this.generateRandomCardBrand(),
      status:1
    };
    this.dialogRef.close(newCard);
  }
  cardForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCardComponent>
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
