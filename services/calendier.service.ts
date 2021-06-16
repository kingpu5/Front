import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendrier } from 'src/app/model/calendrier';

@Injectable({
  providedIn: 'root'
})
export class CalendierService {

  url = 'http://localhost:8080/Calendrier';
  constructor(private _httpClient: HttpClient) { }

  public save(newTache:Calendrier ,id) 
  {
    console.log("heey");
    return this._httpClient.post(this.url+'/'+id ,newTache);
  }

  public getAll(id) 
  {
    console.log("heey");
    return this._httpClient.get<Calendrier[]>(this.url+'/all/'+id);
    window.location.reload();
  }

  public findById ( id ){
    console.log(this.url+ id)
    return this._httpClient.get<Calendrier>(this.url+'/'+ id)
  }
 
  

 

}
