import { Injectable } from '@angular/core';
import { FournisseurModel } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  protected fournisseurList: FournisseurModel[] = [
    {
      'idFour': 1,
      'nom': 'Mostafa Amine',
      'prenom': 'Briere',
      'produits': []
    }
  ];

  constructor() { }

  getAllFournisseurList(): FournisseurModel[] {
    return this.fournisseurList;
  }

  getFournisseurById(id: number): FournisseurModel | undefined {
    return this.fournisseurList.find((fournisseur) => fournisseur.idFour === id);
  }
}
