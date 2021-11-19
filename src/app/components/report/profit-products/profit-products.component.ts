import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTooltip,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

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
  selector: 'app-profit-products',
  templateUrl: './profit-products.component.html',
  styleUrls: ['./profit-products.component.css'],
})
export class ProfitProductsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  viewReport: boolean = false;
  products: any = [];
  categories: any = [];
  preciosAdq: any = [];
  preciosSale: any = [];
  

  constructor(private reportService: ReportsService) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.reportService.getProductsService().subscribe((res) => {
      this.products = [];
      res.forEach((element: any) => {
        this.products.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      console.log(this.products);
      this.formData();
      this.constructChart();
      this.viewReport = true;
    });
  }

  formData() {
    this.products.forEach((element: any) => {
      this.categories.push(element.name);
      this.preciosAdq.push(element.purchase_price);
      this.preciosSale.push(element.price_sale);
    });
  }

  constructChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Precio de Adquisicion',
          data: this.preciosAdq,
        },
        {
          name: 'Precio de Venta',
          data: this.preciosSale,
        },
      ],
      chart: {
        type: 'bar',
        height: 750,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      tooltip: {
        enable:true,
        y: [{
          formatter: function (y:any) {
            if(typeof y !== "undefined") {
              return  "Q " +y.toFixed(2);
            }
            return y;
            
          }
        }, {
          formatter: function (y:any) {
            if(typeof y !== "undefined") {
              return  "Q " + y.toFixed(2);
            }
            return y;
            
          }
        }]
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['#fff'],
      },
      xaxis: {
        categories: this.categories,
      },
    };
  }
}
