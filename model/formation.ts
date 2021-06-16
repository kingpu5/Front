import { Employe } from './mshp-user';
export class Formation {
	 id : number ;

     dateDemande : Date;

	 foramtionDemandee : String;
	 
	 objectifs :String;
	 
	 populationCible : String;

	  duree:String;

	  nomFormateur:String;

	  posteFormateur:String;

	  nomOrganisme : String;
	 
	  fraisFormation :number;

	  modeFinancement : String;

	  observations : String;

	  typeFormation:String;

	 image : String;

	 motif: String;

	 niveau : number ;

	 demandeur: Employe ;
}