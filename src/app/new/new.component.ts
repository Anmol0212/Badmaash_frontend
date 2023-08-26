import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/_models/product.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  productList:Product[]=[]
  productList1:Product[]=[]
  choice:any;

constructor(private productsService:ProductsService,private http:HttpClient){

}
  ngOnInit(): void {
    this.productsService.getnewProducts().subscribe(
      (response: any) => {
        this.productList = response;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    
  
  );
  this.productsService.getJeansProducts().subscribe(
    (response: any) => {
      this.productList1 = response;
    },
    (error: any) => {
      console.error('Error fetching products:', error);
    }
  

);

    }



}
