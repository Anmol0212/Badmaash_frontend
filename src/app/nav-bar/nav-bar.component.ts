import { Component,ViewChild } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 

  vh:String="";
  updatedData: string="";
  route: any;
 
  constructor(private dataService: DataService){}

  ngOnInit() {


  

   
  }

sendData(data:string)
{ 
  this.dataService.updateData(data);
  localStorage.setItem("ch",data);
  console.log(data);
 
 //
}






refresh(): void {
  window.location.reload();
}

}


