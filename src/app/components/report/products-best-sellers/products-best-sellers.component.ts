import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
//import * as moment from 'moment';


import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,

} from 'ng-apexcharts';
import { map } from '@firebase/util';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-products-best-sellers',
  templateUrl: './products-best-sellers.component.html',
  styleUrls: ['./products-best-sellers.component.css']
})
export class ProductsBestSellersComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  public viewReporBestSellers:boolean = false;

  
  salesData:any = new Map();

  productsTop : any = [];
  dataproductsTop : any = [];

  constructor(private reportService: ReportsService) { 

  }

  ngOnInit(): void {
    this.getSales();
  }

  getSales(){
    this.reportService.getOrdesDeliveredService().subscribe((res) =>{
      res.forEach((orderDoc: any) => {
        let productsOrder = orderDoc.payload.doc.data().products;
          productsOrder.forEach((productItem:any) => {
            if(this.salesData.has(productItem.product.id)){
              this.salesData.set(productItem.product.id,{
                Nombre: productItem.product.name,
                Cantidad: productItem.unit + this.salesData.get(productItem.product.id).Cantidad
              });
            }else{
              this.salesData.set(productItem.product.id,{
                Nombre:productItem.product.name,
                Cantidad: productItem.unit
              });
            }
          });
      });  
      let mapsort = new Map([...this.salesData].sort((a,b) => b[1].Cantidad - a[1].Cantidad));
      this.salesData = mapsort;
      
      this.formData()
      this.constructChart();
      this.viewReporBestSellers = true;
    });
  }

  formData(){
    let limit = 0;
    this.salesData.forEach((value:any, key:any) => {
      if(limit < 10){
        this.productsTop.push(value.Nombre);
        this.dataproductsTop.push(value.Cantidad);
        limit++;
      }
    });

  }

  constructChart(){
    this.chartOptions = {
      series: [
        {
          name: "Cantidad Vendida: ",
          data: this.dataproductsTop
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        },
      },
      dataLabels: {
        enabled: true
      },
      tooltip: {
        enable:true,
        y: [{
          formatter: function (y:any) {
            if(typeof y !== "undefined") {
              if(y > 1){
                return `${y} Unidades`
              }
              return  `${y} Unidad`;
            }
            return y;
            
          }
        }, {
          formatter: function (y:any) {
            if(typeof y !== "undefined") {
              if(y > 1){
                return `${y} Unidades`
              }
              return  `${y} Unidad`;
            }
            return y;
            
          }
        }]
      },
      title: {
        text: "Prouctos con Mayor Demanda (en Unidades)"
      },
      xaxis: {
        categories: this.productsTop
      }
    };
  }

}
