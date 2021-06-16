import { NotificationUser } from './../../../model/notificationUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url = 'http://localhost:8080/Notification';
  constructor(private _httpClient: HttpClient) { }
  public save(newNotification:NotificationUser ,id) 
  {
    console.log("heey");
    return this._httpClient.post(this.url+'/employe/'+id ,newNotification);
  }

  public getAll(id) 
  {
    console.log("heey");
    return this._httpClient.get<NotificationUser[]>(this.url+'/employe/'+id);
    window.location.reload();
  }

  edit(notification: NotificationUser){

    return this._httpClient.put(this.url, notification);
  }

}
