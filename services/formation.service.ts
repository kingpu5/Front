

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from 'src/app/model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  public formation : Formation = null;
  url = 'http://localhost:8080/DemandeFormation';
  url2 = 'http://localhost:8080/countFormation';
  constructor(private _httpClient: HttpClient) { }

  public getAllDemandes()
  {
    return this._httpClient.get<Formation[]>(this.url);
  }

  public save(newAutorisation:Formation, id) 
  {
    return this._httpClient.post(this.url + '/employe/' + id ,newAutorisation);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<Formation[]>(this.url + '/employee/' + matricule);
  }

  public getByRole( role: string)
  {
    return this._httpClient.get<Formation[]>(this.url+"/ByRole/"+role);
  }


  public editDemandeFormation  (newFormation:Formation){
    let formation = newFormation

    if([0,1,2,3].some(xx => xx === formation.niveau)){
      console.log("if 1999999999")
      formation.niveau = formation.niveau + 1 ;
      console.log (formation.niveau)
      return this._httpClient.put(this.url , formation);
  }

  if (formation.niveau != 4){
    console.log("if 3")
    return null;
  }
  return null;
}

public editDemandeFormation2  (newFormation:Formation){
  let formation = newFormation

  
    console.log("rejet a33333")
    formation.niveau = -1;
    console.log (formation.niveau)
    return this._httpClient.put(this.url , formation);
}

public Count()
{
  return this._httpClient.get(this.url2);
}

}
