import { Component, OnInit, ViewChild } from '@angular/core';
//import * as moment from 'moment';


import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,

} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
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

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [250, 195, 150, 147, 132, 119, 97, 85, 70, 55]
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
      title: {
        text: "Prouctos con Mayor Demanda (en Unidades)"
      },
      xaxis: {
        categories: [
          "Productos Lacteos",
          "Bebidas Alcoholicas",
          "Comida Refrigerada",
          "Snacks",
          "Dulces",
          "Galletas",
          "Pastas",
          "Quesos",
          "Productos Enlatados",
          "Cereales"
        ]
      }
    };


  }

  ngOnInit(): void {
  }

}
