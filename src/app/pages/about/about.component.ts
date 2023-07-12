import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  foodData: { id: number; foodName: string; offer: string; foodDetails: string; foodC: string; foodPrice: number; foodImg: string; abou: string;}[] | undefined;
constructor(private service:OrderDetailsService){}
  ngOnInit(): void {
    this.foodData =this.service.foodDetails; 
  }
}
  