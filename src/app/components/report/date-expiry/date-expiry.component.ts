import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

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
  selector: 'app-date-expiry',
  templateUrl: './date-expiry.component.html',
  styleUrls: ['./date-expiry.component.css']
})
export class DateExpiryComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "Fecha de Vencimiento",
          data: [
            {
              x: "Huevos",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-15").getTime()],
              fillColor: "#00E396"
            },
            {
              x: "Coca-Cocal 3L",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-07").getTime()],
              fillColor: "#FF4560"
            },
            {
              x: "Pepsi Jumbo 3L",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-08").getTime()],
              fillColor: "#FF4560"
            },
            {
              x: "Sopa Laky Men",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-20").getTime()],
              fillColor: "#00E396"
            },
            {
              x: "Jamon Perry Pack",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-05").getTime()],
              fillColor: "#FF4560"
            },
            {
              x: "Cafe Nescafe Bolsa",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-20").getTime()],
              fillColor: "#00E396"
            },
            {
              x: "Aceite Ideal 175ml",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-15").getTime()],
              fillColor: "#00E396"
            },
            {
              x: "Azucar Caña Real 1lb",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-30").getTime()],
              fillColor: "#00E396"
            },
            {
              x: "Queso Cream Ilgua",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-10").getTime()],
              fillColor: "#FF4560"
            },
            {
              x: "Frijol Ducal",
              y: [new Date("2021-10-30").getTime(), new Date("2021-11-31").getTime()],
              fillColor: "#00E396"
            }
          ]
        },
       
      ],
      chart: {
        type: "rangeBar",
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val:any, opts:any) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, "days");
          return "Vence en: " + diff + (diff > 1 ? " dias" : " dia");
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Fecha de Caducidad"
        }
      }
    };


  }

  ngOnInit(): void {
  }

}
