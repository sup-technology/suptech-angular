import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  fournisseruService = inject(FournisseurService);
  applyForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
  });

  create() {
    this.fournisseruService.create(
      this.applyForm.value.nom ?? '',
      this.applyForm.value.prenom ?? '',
    );
  }
}
