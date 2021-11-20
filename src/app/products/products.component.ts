import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  load:boolean = false;

  constructor(private _ProductsService: ProductsService) { }

  filtro_valor = '';

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._ProductsService.getProducts().subscribe(data => {
      this.products = [];
       data.forEach((element: any) => {
         this.products.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
       })
     })
     console.log(this.products)
     this.load = false;
   });
  }

  handleSearch(value:string) {
    this.filtro_valor = value;
  }

}
