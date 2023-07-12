import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OrderService } from '../service1/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit{
  constructor(private services:OrderDetailsService,private service1:OrderService){}
  foodData:any;
  Product:any;
  ngOnInit(): void {
   this.foodData =this.services.foodDetails; 
   this.Product =this.service1.productDetails;
  }
}

