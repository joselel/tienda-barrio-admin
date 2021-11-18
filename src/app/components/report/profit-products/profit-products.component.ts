import { Component, OnInit, ViewChild } from '@angular/core';

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
  selector: 'app-profit-products',
  templateUrl: './profit-products.component.html',
  styleUrls: ['./profit-products.component.css']
})
export class ProfitProductsComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "Precio de Adquisicion",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "Precio de Venta",

          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ["Leche Descremada", 
        "Cereal Chocokrispis", 
        "Coca-Cola", 
        "Pepsi", 
        "Pan de Manteca", 
        "Crema", 
        "Mantequilla Maarisol"]
      }
    }

  }

  ngOnInit(): void {

    
  }

}
