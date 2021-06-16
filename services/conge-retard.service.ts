import { HttpClient } from '@angular/common/http';
import { congeRetard } from './../../../model/congeRetard';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongeRetardService {
  public conge : congeRetard  = null;
 
  url = 'http://localhost:8080/DemandeCongeRetard';
  
  constructor(private _httpClient:HttpClient) { }

  public getAllDemandes()
  {
    return this._httpClient.get<congeRetard[]>(this.url);
  }

  public save(newConge:congeRetard, id) 
  {
   console.log(this.url + '/employe/' + id );
   console.log(newConge);
    return this._httpClient.post(this.url + '/employe/' + id ,newConge);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<congeRetard[]>(this.url + '/demandeur/' + matricule);
  }


  public getByRole( role: string)
  {
    return this._httpClient.get<congeRetard[]>(this.url+"/ByRole/"+role);
  }

  public editConge(newConge:congeRetard){
    let conge = newConge
  
    if([0,1,2,3].some(xx => xx === conge.niveau)){
      console.log("if 1999999999")
      conge.niveau = conge.niveau + 1 ;
      console.log (conge.niveau)
      return this._httpClient.put(this.url , conge);
  }
  
  if (conge.niveau != 4){
    console.log("if 3")
    return null;
  }
  return null;
  }
  
  public editDemandeConge2  (newConge:congeRetard){
  let conge = newConge
  
  
    console.log("rejet a33333")
    conge.niveau = -1;
    console.log (conge.niveau)
    return this._httpClient.put(this.url , conge);
  }
  

supprimerDemande (id : number){
  return this._httpClient.delete(this.url+id)
  }

    

}
