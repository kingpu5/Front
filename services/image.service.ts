import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient) { }
  uploadEmployeFile(file: File , matricule: number)
  {
    const formData = new FormData();
    formData.append('file', file, 'image-employe-' + matricule + '.' + file.name.split('.').pop());
    return this._httpClient.post('http://localhost:8080/uploadEmployeFile/'+matricule, formData);
  }

  uploadSortieFile(file: File , id: any)
  {console.log("affichi ya bro")
    console.log(id)
    const formData = new FormData();
    formData.append('file', file, 'image-sortie-' +id + '.' + file.name.split('.').pop());
    return this._httpClient.post('http://localhost:8080/uploadSortieFile/'+id, formData);
  }

  uploadMaladieFile(file: File , id: any)
  {console.log("heey")
    console.log(id)
    const formData = new FormData();
    formData.append('file', file, 'image-certificat-' +id + '.' + file.name.split('.').pop());
    return this._httpClient.post('http://localhost:8080/uploadMaladieFile/'+id, formData);
  }

  uploadProduitFile(file: File , id: any)
  {console.log("heey")
    console.log(id)
    const formData = new FormData();
    formData.append('file', file, 'image-produit-' +id + '.' + file.name.split('.').pop());
    return this._httpClient.post('http://localhost:8080/uploadAchatFile/'+id, formData);
  }
  
}
