import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autorisation } from 'src/app/model/autorisationSortie';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  public autorisation : Autorisation = null;
  url = 'http://localhost:8080/DemandeSortie';
  url2 = 'http://localhost:8080/countSortie';
  constructor(private _httpClient: HttpClient) { }

  public getAllDemandes()
  {
    return this._httpClient.get<Autorisation[]>(this.url);
  }

  public save(newAutorisation:Autorisation, id) 
  {
   console.log(this.url + '/employe/' + id );
   console.log(newAutorisation);
    return this._httpClient.post(this.url + '/employe/' + id ,newAutorisation);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<Autorisation[]>(this.url + '/emp/' + matricule);
  }

  public getByRole( role: string)
  {
    return this._httpClient.get<Autorisation[]>(this.url+"/ByRole/"+role);
  }


  public editDemandeAutorisation  (newAutorisation:Autorisation){
    let autorisation = newAutorisation

    if([0,1,2,3].some(xx => xx === autorisation.niveau)){
      console.log("if 1999999999")
      autorisation.niveau = autorisation.niveau + 1 ;
      console.log (autorisation.niveau)
      return this._httpClient.put(this.url , autorisation);
  }

  if (autorisation.niveau != 4){
    console.log("if 3")
    return null;
  }
  return null;
}

public editDemandeAutorisation2  (newAutorisation:Autorisation){
  let autorisation = newAutorisation

  
    console.log("rejet a33333")
    autorisation.niveau = -1;
    console.log (autorisation.niveau)
    return this._httpClient.put(this.url , autorisation);
}



public Count()
  {
    return this._httpClient.get(this.url2);
  }

}


