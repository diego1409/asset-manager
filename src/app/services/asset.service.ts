import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asset } from '../Asset';
//import { ASSETS } from '../mock-assets';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  apiURL: string = "http://localhost:3000/assets"

  constructor(private http: HttpClient) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiURL);
  }

  getAsset(id: string): Observable<Asset> {
    const url = `${this.apiURL}/${id}`;
    console.log(url);
    return this.http.get<Asset>(url);
  }

  updateAsset(asset: Asset): Observable<Asset> {
    const url = `${this.apiURL}/${asset.id}`;
    return this.http.put<Asset>(url, asset, httpOptions);
  }

  deleteAsset(asset: Asset): Observable<Asset> {
    const url = `${this.apiURL}/${asset.id}`;
    return this.http.delete<Asset>(url);
  }
  
  addAsset(asset): Observable<Asset> {
    return this.http.post<Asset>(this.apiURL, asset, httpOptions);
  }
}
