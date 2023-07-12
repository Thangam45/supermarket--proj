import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service2/blog.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  constructor(private service2: BlogService,private orde:OrderDetailsService){}
 bloog:any;
 foodData:any;
  ngOnInit(): void {
this.bloog=this.service2.blog;
this.foodData=this.orde.foodDetails;
  }
 
}
