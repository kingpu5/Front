import { HttpClient } from '@angular/common/http';
import { congeMaternite } from './../../../model/congeMaternite';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/demo/application/services/notification.service';
 import { NotificationUser } from 'src/app/model/notificationUser';
import { DatePipe ,formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CongeMaterniteService {
  Date = new Date();
  public conge : congeMaternite = null;
 
  url = 'http://localhost:8080/DemandeCongeMaternite';
  url2 ='http://localhost:8080/countMaternite'
  constructor(public notification : NotificationService ,public datepipe: DatePipe,private _httpClient:HttpClient) { }
  public newNotification : NotificationUser = new NotificationUser();
  public getAllDemandes()
  {
    return this._httpClient.get<congeMaternite[]>(this.url);
  }

  public save(newConge:congeMaternite, id) 
  {
   console.log(this.url + '/employe/' + id );
   console.log(newConge);
    return this._httpClient.post(this.url + '/employe/' + id ,newConge);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<congeMaternite[]>(this.url + '/demandeur/' + matricule);
  }


  public getByRole( role: string)
  {
    return this._httpClient.get<congeMaternite[]>(this.url+"/ByRole/"+role);
  }


  public editConge(newConge:congeMaternite){
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
  
  public editDemandeConge2  (newConge:congeMaternite){
  let conge = newConge
  
  
    console.log("rejet a33333")
    conge.niveau = -1;
    console.log (conge.niveau)
    return this._httpClient.put(this.url , conge);
  }
  

}
