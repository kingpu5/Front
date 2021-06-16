import { Employe } from './mshp-user';
export class Conge {
    id:number;

    adresseConge :string;

    debutConge :Date;

    finConge : Date;

    typeConge : string;
   
    CongeRecuperation : string;

    nbrJours : number;

    image : string;

    motif : string;
     
    dateDemande : Date;

    nombreFoisRetard : number;
	    
    nombreFoisJustifie : number;

    demandeur: Employe ;

    niveau : number;
    
}