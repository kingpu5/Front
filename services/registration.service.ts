import { Observable } from 'rxjs';
import { Employe } from 'src/app/model/mshp-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _httpClient: HttpClient) { }

  public loginUserFromRemote(employe:Employe):Observable<any>
  {
  return this._httpClient.post<any>("http://localhost:8080/Employe/login", employe);
 }
 public registerUserFromRemote(employe:Employe):Observable<any>
  {
  return this._httpClient.post<any>("http://localhost:8080/Employe/Enregistrer", employe);
 }


}

