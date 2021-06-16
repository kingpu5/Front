import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Employe } from 'src/app/model/mshp-user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MshpUserService {
  append(arg0: string, userFile: any) {
    throw new Error('Method not implemented.');
  }
  url = 'http://localhost:8080/Employe';
  url2 = 'http://localhost:8080/employe/';
  selectedFile: File;
  
  constructor(private _httpClient: HttpClient) { }
    
  public getAllEmploye()
  {
    return this._httpClient.get<Employe[]>(this.url);
  }
 
  public save(newEmploye:Employe, id:number) 
  {
    return this._httpClient.post(this.url + '/Sup/' + id ,newEmploye);
  }

  public createPDG (newPDG : Employe){
    return this._httpClient.post(this.url + '/PDG', newPDG);
  }

  public findByRole (role:String)
  {
    return this._httpClient.get<Employe[]>(this.url + '/Role/'+ role);
  }
  
   edit(employe: Employe){
    return this._httpClient.put(this.url, employe);
  }
  
   supprimerEmploye (id : number){
   return this._httpClient.delete(this.url2+id)
   }


   public findById ( id ){
     console.log(this.url+ id)
     return this._httpClient.get<Employe>(this.url+'/'+ id)
   }
  
   



}
