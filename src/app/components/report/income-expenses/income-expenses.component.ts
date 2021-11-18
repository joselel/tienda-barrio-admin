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
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css']
})
export class IncomeExpensesComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "Ingresos",
          data: [0, 0, 0,0,0,0,0,0,10500,12500]
        },
        {
          name: "Egresos",
          data: [0, 0, 0,0,0,0,0,0,15700, 20000]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      title :{
        Text: "Gastos Vs Ingresos"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: ["Enero", "Febrero",  "Marzo",  "Abril",  "Mayo",  "Junio",  "Julio",  "Agosto", "Septiembre", "Octubre"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };


  }

  ngOnInit(): void {
  }

}
