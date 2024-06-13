import { Component, Input } from '@angular/core';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card me-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          {{ client.name }}
        </h5>
        <p class="card-text">
          {{ client.name }}
        </p>
        <a href="#" class="btn btn-primary">
          Say Hi
        </a>
      </div>
    </div>
  `,
})
export class ClientCardComponent {
  @Input() client!: ClientModel
}
