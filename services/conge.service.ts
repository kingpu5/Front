
import { Conge } from './../../../model/conge';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  public conge : Conge = null;
 
  url = 'http://localhost:8080/DemandeConge';
 
  constructor(private _httpClient:HttpClient) { }

  public getAllDemandes()
  {
    return this._httpClient.get<Conge[]>(this.url);
  }

  public save(newAchat:Conge, id) 
  {
   console.log(this.url + '/employe/' + id );
   console.log(newAchat);
    return this._httpClient.post(this.url + '/employe/' + id ,newAchat);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<Conge[]>(this.url + '/demandeur/' + matricule);
  }


  public getByRole( role: string)
  {
    return this._httpClient.get<Conge[]>(this.url+"/ByRole/"+role);
  }


 
  public editDemandeConge  (newConge:Conge){
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

public editDemandeConge2  (newConge:Conge){
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

