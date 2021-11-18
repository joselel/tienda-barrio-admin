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
  selector: 'app-sales-monthly',
  templateUrl: './sales-monthly.component.html',
  styleUrls: ['./sales-monthly.component.css']
})
export class SalesMonthlyComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "Ventas Mensulaes",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 1500,1250]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      
      title: {
        text: "Ventas al Mes (Q.)"
      },
      xaxis: {
        categories: ["Enero", "Febrero",  "Marzo",  "Abril",  "Mayo",  "Junio",  "Julio",  "Agosto", "Septiembre", "Octubre"]
      }
    };
  }

  ngOnInit(): void {
  }

}
