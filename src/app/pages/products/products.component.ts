// import { Component, OnInit } from '@angular/core';

// import { ProService } from '../service3/pro.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
  
// constructor(private service3:ProService ){}
// ourproducts:any;

//   ngOnInit(): void {
//   this.ourproducts=this.service3.pro1;
//   console.log( this.ourproducts)
//   }

// }





import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
constructor(){}
ourproducts:any;

  ngOnInit(): void {
 
  }

}



