import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from 'src/_models/images.model';
import { Product } from 'src/_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  public getAllProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9091/product/all");
   }
   public getAllProductsByARange(choice:any,min:number,max:number) : Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9091/product/range/"+choice+"/"+min+"/"+max);
   }
   public getAllProductsBytype(choice:any) : Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9091/product/allByType/"+choice);
   }
   public getProductImage() : Observable<String>{
    return this.httpClient.get<String>("http://localhost:9091/product/image/4");
   }

   public getnewProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9091/product/latest");
   }

   public getJeansProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9091/product/10Jeans");
   }
   
  
  

}
