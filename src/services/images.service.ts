import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Images } from 'src/_models/images.model';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient:HttpClient) { }

  public getimageByProductId(id:any):Observable<Images>{
    return this.httpClient.get<Images>("http://localhost:9092/Images/image/"+id);
  }
}
