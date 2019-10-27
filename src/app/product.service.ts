import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// imports data from this map which is a json file

@Injectable()
export class ProductService {
 // set a url for the album
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {

   }
   getAlbum(id: number) {
     return this._http.get(this._albumUrl).map((response) => {
       response.json()
     });
   }
}
