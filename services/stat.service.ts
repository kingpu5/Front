import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  url = 'http://localhost:8080/countRetard';
  url1 = 'http://localhost:8080/countMaladie';
  url2 = 'http://localhost:8080/countMaternite';
  url3 = 'http://localhost:8080/countConge';
  url4 = 'http://localhost:8080/countSortie';
  url5 = 'http://localhost:8080/countFormation';
  url6 = 'http://localhost:8080/countAchat';

  urll = 'http://localhost:8080/countDemande';
  urll1 = 'http://localhost:8080/countDemande1';
  urll2 = 'http://localhost:8080/countDemande2';
  urll3 = 'http://localhost:8080/countDemande3';
  urll4 = 'http://localhost:8080/countDemande4';
  urll5 = 'http://localhost:8080/countDemande5';
  urll6 = 'http://localhost:8080/countDemande6';



  constructor(private _httpClient:HttpClient) { }

  public Count()
  {
    return this._httpClient.get(this.url);
  }

  public Count1()
{
  return this._httpClient.get(this.url1);
}

public Count2()
{
  return this._httpClient.get(this.url2);
}

public Count3()
{
  return this._httpClient.get(this.url3);
}

public Count4()
{
  return this._httpClient.get(this.url4);
}

public Count5()
{
  return this._httpClient.get(this.url5);
}

public Count6()
{
  return this._httpClient.get(this.url6);
}



public Countt(id : any )
{
  return this._httpClient.get(this.urll +'/'+ id);
}


public Count11(id : any)
{
return this._httpClient.get(this.urll1 +'/'+ id );
}

public Count22(id : any)
{
return this._httpClient.get(this.urll2  +'/'+ id );
}

public Count33(id : any)
{
return this._httpClient.get(this.urll3 +'/'+ id );
}

public Count44( id : any )
{
return this._httpClient.get(this.urll4 +'/'+ id );
}

public Count55(id : any)
{
return this._httpClient.get(this.urll5 +'/'+ id );
}

public Count66(id : any)
{
return this._httpClient.get(this.urll6 +'/'+ id );
}




}
