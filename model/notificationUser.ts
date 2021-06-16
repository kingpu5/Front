import { Employe } from './mshp-user';
export class NotificationUser {
   id : number;
   header : string ;
   body : string ;
   isRead : boolean ;
   dateNotification : Date ;
  traiteur: Employe ;
}