import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MaterialModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
