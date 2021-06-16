import { Employe } from './mshp-user';
export class congeMaternite {
    id:number;

    debutConge :Date;

    finConge : Date;

    typeConge : string;
   
    nbrJours : number;

    image : string;

    dateDemande : Date;

    demandeur: Employe ;

    niveau : number;

}