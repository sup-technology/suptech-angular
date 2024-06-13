import { Component } from '@angular/core';
import { NavbarComponent } from '../partials/navbar/navbar.component';
@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.css'
})
export class AuthenticatedLayoutComponent {

}
