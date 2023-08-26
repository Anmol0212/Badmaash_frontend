import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Images } from 'src/_models/images.model';
import { Product } from 'src/_models/product.model';
import { ImagesService } from 'src/services/images.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productList:Product[]=[]
  selectedOption = '';
 
  
  // choie: string | null = null;
  choice:any;
  imageData!: Images;
  imageSrc: string | undefined;
  sanitizer: any;
  imgData:String=""
  imageId:any
  img!: Images;
  // const choice: string = h ? h : "";
  

  constructor(private route: ActivatedRoute,private http:HttpClient,private productsService:ProductsService, private router : Router,private imageservice:ImagesService  ){

  

  }


  ngOnInit(): void {
   
    this.logSelectedOption();   
     
    
   }
   

 
  logSelectedOption() {
    console.log('Selected option:', this.selectedOption);
    console.log("I am working");
    this.choice=localStorage.getItem("ch");
     
    console.log(this.choice);
    //this.refresh();
    
    switch(this.selectedOption)
    { 
    
      case "option1":
        this.productList=[];
        
        this.productsService.getAllProductsByARange(this.choice,500,999).subscribe(data=>{
        this.productList=data;
        console.log(this.productList);
        
      }
      );
      break;
      case "option2":
        this.productList=[];
        this.productsService.getAllProductsByARange(this.choice,1000,1499).subscribe(data=>{
        this.productList=data;
        console.log(this.productList);
      }
      );
      break;
      case "option3":
        this.productList=[];
        this.productsService.getAllProductsByARange(this.choice,1500,2000).subscribe(data=>{
        this.productList=data;
        console.log(this.productList);
      }
      );
      break;
      case "option4":
        this.productList=[];
        this.productsService.getAllProductsByARange(this.choice,2000,1000000).subscribe(data=>{
        this.productList=data;
        console.log(this.productList);
      }
      );
      break;
      default:
        this.productList=[];
        
        this.productsService.getAllProductsBytype(this.choice).subscribe(data=>{
        this.productList=data;
       
        console.log(this.productList);
        

        
      }
      );break;
    }
  }

  refresh(): void {
    
  window.location.reload();
}
  


}

  


