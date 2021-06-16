import { Tache } from './../../../model/tache';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  url = 'http://localhost:8080/Tache';
  constructor(private _httpClient: HttpClient) { }

  public save(newTache:Tache ,id) 
  {
    console.log("heey");
    return this._httpClient.post(this.url+'/'+id ,newTache);
  }

  public getAll(id) 
  {
    console.log("heey");
    return this._httpClient.get<Tache[]>(this.url+'/all/'+id);
    window.location.reload();
  }

  public delete () {
    return this._httpClient.delete(this.url)
  }


}
