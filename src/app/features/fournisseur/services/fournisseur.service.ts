import { Injectable } from '@angular/core';
import { FournisseurModel } from '../models/fournisseur.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  url = 'http://localhost:8080/fournisseurs';

  protected fournisseurList: FournisseurModel[] = [];

  constructor(private http: HttpClient) { }

  async getAllFournisseurList(): Promise<FournisseurModel[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getFournisseurById(id: number): Promise<FournisseurModel | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  create(nom: string, prenom: string): Observable<FournisseurModel> {
    const fournisseur = { nom, prenom };
    return this.http.post<FournisseurModel>(this.url, fournisseur);
  }
}
