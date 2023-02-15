import { Component,OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productdetail:any
  constructor(private service:StoreService,private router:ActivatedRoute){ }
 
  ngOnInit(): void {
    let id=this.router.snapshot.params["id"]
    console.log(id)
    this.service.getProductDetails(id).then((res:any)=>res.json()).then((data:any)=>this.productdetail=data)
  }

}
