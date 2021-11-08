import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  estadisticas!: any[];
  single!:any[];
  below = LegendPosition.Below;
  view:[number,number]= [350, 210];
  product_id:string = '';
  product:Product = {
                  admission_date: '',
                  expiration_date:'',
                  id: '',
                  image:'',
                  name: '',
                  price_sale: 0,
                  purchase_price: 0,
                  sales: 0,
                  stock: 0
                  };
  prueba:any;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

 colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
              private rutaActiva: ActivatedRoute,
              private ProductService:ProductsService) {
                Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getProduct(){
    this.product_id =  this.rutaActiva.snapshot.params.nombreProducto;
    this.ProductService
            .getProduct(this.product_id)
            .subscribe(doc => {

              if(doc != null || doc != undefined){
                this.product = {
                  admission_date: doc.payload.data()['admission_date'],
                  expiration_date: doc.payload.data()['expiration_date'],
                  id: doc.payload.data()['id'],
                  image: doc.payload.data()['image'],
                  name: doc.payload.data()['name'],
                  price_sale: doc.payload.data()['price_sale'],
                  purchase_price: doc.payload.data()['purchase_price'],
                  sales: doc.payload.data()['sales'],
                  stock: doc.payload.data()['stock']
                }
                this.single = [];
                this.single.push(
                    {
                      'name':'stock',
                      'value':this.product.stock
                    },
                    { 'name':'ventas',
                      'value':this.product.sales}
                    )
                    this.estadisticas = this.single;

              }else{
                console.log('ocurrio un error al obtener datos de firestore')
              }
            });
  }
}
