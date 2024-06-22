import { Component, inject } from '@angular/core';
import { FournisseurService } from '../../services/fournisseur.service';
import { FournisseurModel } from '../../models/fournisseur.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  fournisseurService = inject(FournisseurService);
  fournisseur: FournisseurModel | undefined;

  constructor() {
    const fournisseurId = Number(this.route.snapshot.params['id']);
    this.fournisseurService.getFournisseurById(fournisseurId).then((fournisseur) => {
      this.fournisseur = fournisseur;
    })
  }
}
