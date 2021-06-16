import { Employe } from './mshp-user';
import { Time } from "@angular/common";

export class Autorisation {
     id : number ;

     dateDemande : Date;

     datePrevue: string;

     dateEffective:string;

     heureSortie :string;

     motif: string;

     filePath : string ;

     demandeur: Employe ;

     niveau : number;



}