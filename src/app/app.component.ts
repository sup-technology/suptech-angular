import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthenticatedLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suptech_project_client';
}
