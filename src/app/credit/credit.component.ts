import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss',
})
export class CreditComponent {}
