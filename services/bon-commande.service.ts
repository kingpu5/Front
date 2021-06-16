import { BonCommande } from './../../../model/bonDeCommande';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonCommandeService {
  url = 'http://localhost:8080/BonCommande';
  constructor(private _httpClient: HttpClient) { }

  public save(newBonCommande:BonCommande) 
  {
    console.log("heey");
    return this._httpClient.post(this.url,newBonCommande);
  }

  public getAll() 
  {
    console.log("heey");
    return this._httpClient.get<BonCommande[]>(this.url);
    window.location.reload();
  }

  public delete () {
    return this._httpClient.delete(this.url)
  }

  public findById ( id ){
    console.log(this.url+ id)
    return this._httpClient.get<BonCommande>(this.url+'/'+ id)
  }

 
}
