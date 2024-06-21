import { Component, inject } from '@angular/core';
import { FournisseurModel } from '../../models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fournisseurList: FournisseurModel[] = [];
  fournisseurService: FournisseurService = inject(FournisseurService);
  constructor() {
    this.fournisseurList = this.fournisseurService.getAllFournisseurList();
  }
}
