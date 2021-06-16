import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achat } from 'src/app/model/achat';
import { Produit } from 'src/app/model/produit';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  public test: Object=false;
  public test2: Object=false;
  public achat : Achat = null;
  url = 'http://localhost:8080/DemandeAchat';
  url2 = 'http://localhost:8080/countMaternite';
  constructor(private _httpClient:HttpClient) { }

  public getAllDemandes()
  {
    return this._httpClient.get<Achat[]>(this.url);
  }

  public postproduit(newAchat:Achat)
  {
    return this._httpClient.get("http://localhost:8080/Produitt/"+newAchat.id) ;
  }
 
  public save(newAchat:Achat, id) 
  {
   console.log(this.url + '/employe/' + id );
   console.log(newAchat);
    return this._httpClient.post(this.url + '/employe/' + id , newAchat);
  }

  public getDemandesByEmployeId( matricule:string){
    return this._httpClient.get<Achat[]>(this.url + '/employe/' + matricule);
  }

  public getByRole( role: string)
  {
    return this._httpClient.get<Achat[]>(this.url+"/ByRole/"+role);
  }
  public editDemandeAchat2 (newAchat:Achat){
    console.log("waa ya rojla")
    newAchat.niveau =  -1 ;
    console.log (newAchat)
    return this._httpClient.put(this.url , newAchat);
 

  }
  public editDemandeAchat (newAchat:Achat){
  
    let x=newAchat
    //console.log([0,12,13].some(xx => xx === x.niveau));
   // if (x.niveau in [0,12,13]){

    if([0].some(xx => xx === x.niveau)){
      if(x.familleAchat=="Achats Bureautiques"){ x.niveau =   1 ;}
      if(x.familleAchat=="Achats Billeterie Et Hotels"){ x.niveau =   2 ;}
      if(x.familleAchat=="Achats Cartes Carburant"){ x.niveau =   3 ;}
      if(x.familleAchat=="Achats Tiquets Restauration"){ x.niveau =   4 ;}
      if(x.familleAchat=="Achats Location Voitures"){ x.niveau =   5 ;}
      if(x.familleAchat=="Achats Parc Automobiles"){ x.niveau =   6;}
      if(x.familleAchat=="Achats Parc Infomatique"){ x.niveau =   7 ;}
      if(x.familleAchat=="Achats Equipement Accessoires Radio"){ x.niveau =8;}
      if(x.familleAchat=="Achats Support"){ x.niveau =   9 ;}
      if(x.familleAchat=="Achats Services Equipements"){ x.niveau =   10 ;}
      console.log(x.familleAchat, x.niveau);
      
      this.postproduit(x).subscribe(
        data =>{ 
        console.log("hello")} );
      
    
      console.log (x)
      return this._httpClient.put(this.url , x);

    }


      if([11,12].some(xx => xx === x.niveau)){
      console.log("if 1")
      x.niveau = x.niveau + 1 ;
      console.log (x)
      return this._httpClient.put(this.url , x);
    }
  
    //if (x.niveau in [1,2,3,4,5,6,7,8,9,10,11]){
      if([1,2,3,4,5,6,7,8,9,10].some(xx => xx === x.niveau)){
      console.log("if 2")
      x.niveau =  12 ;
      console.log (x)
      return this._httpClient.put(this.url , x);
    }

    if (x.niveau != 13){
      console.log("if 3")
      return null;
    }
    if (x.niveau = 13){
      x.niveau =  -2 ;
      console.log (x)
      return this._httpClient.put(this.url , x);
    }
    console.log("wtf")
    return null;
  
  }

public getBydemandeId (id : number){
  return this._httpClient.get<Produit[]>('http://localhost:8080/Produit/demande/' + id );
}

public editProduit (produit : Produit){
return this._httpClient.put('http://localhost:8080/Produit',produit);
}


public modifierProduit (achat: Achat){
  return this._httpClient.put(this.url , achat);
}

public findById ( id ){
  console.log(this.url+ id)
  return this._httpClient.get<Produit[]>(this.url+'/'+ id)
}


public Count()
  {
    return this._httpClient.get(this.url2);
  }

}
