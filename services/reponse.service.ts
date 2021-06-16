import { Reponse } from './../../../model/reponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  url = 'http://localhost:8080/Reponse';
  constructor(private _httpClient: HttpClient) { }

  public saveDemandeAchat(newReponse:Reponse, id:number ,matricule:number) 
  {console.log("hello bruda??")
    return this._httpClient.post(this.url + '/demandeAchat/' + id +'/'+ matricule ,newReponse);
  }

  public saveDemandeFormation(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeFormation/' + id +'/' + matricule ,newReponse);
  }

  public saveDemandesortie(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeSortie/' + id  +'/'+ matricule ,newReponse);
  }

  public saveDemandeConge(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeConge/' + id +'/'+ matricule ,newReponse);
  }

  public saveDemandeCongeMaladie(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeCongeMaladie/' + id +'/'+ matricule ,newReponse);
  }

  public saveDemandeCongeMaternite(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeCongeMaternite/' + id +'/'+ matricule ,newReponse);
  }

  public saveDemandeCongeRetard(newReponse:Reponse, id:number ,matricule:number) 
  {
    return this._httpClient.post(this.url + '/demandeCongeRetard/' + id +'/'+ matricule ,newReponse);
  }

  public findById ( id ){
    return this._httpClient.get<Reponse>(this.url+'/'+ id)
  }
 
  
  edit(reponse: Reponse){
    return this._httpClient.put(this.url, reponse);
  }

  supprimerReponse (id : number){
    return this._httpClient.delete(this.url+id)
  }

  public getAllReponse()
  {
    return this._httpClient.get<Reponse[]>(this.url);
  }
  

}
