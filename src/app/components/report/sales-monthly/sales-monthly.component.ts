import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

import * as moment from 'moment';

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
  selector: 'app-sales-monthly',
  templateUrl: './sales-monthly.component.html',
  styleUrls: ['./sales-monthly.component.css']
})
export class SalesMonthlyComponent implements OnInit {

  @ViewChild("chart") chart : ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  public viewReportSalesMonthly:boolean = false;

  dataChart: any = [0,0,0,0,0,0,0,0,0,0,0,0];
  salesData: any = [];

  constructor(private reportService: ReportsService) { 
    this.getSales();
  }

  ngOnInit(): void {
    
  }

  getSales(){
    this.reportService.getOrdesDeliveredService().subscribe((res) =>{
      res.forEach((orderDoc:any) => {
        this.salesData.push({
          id: orderDoc.payload.doc.id,
          ...orderDoc.payload.doc.data()
        })
      });
      console.log("Ventas");
      this.formData();
      this.constructChart();
      this.viewReportSalesMonthly = true;
    });
  }


  formData(){
    let currentYear = new Date().getFullYear();
    this.salesData.forEach((itemSale:any) => {
      
      let currentYearItem = new Date(itemSale.FechaEntrega.seconds*1000).getFullYear();
      let currentMonthItem = new Date(itemSale.FechaEntrega.seconds*1000).getMonth();
      
      if(currentYear == currentYearItem){
        this.dataChart[currentMonthItem] = this.dataChart[currentMonthItem] + itemSale.total;
        
      }
    });     
  }


  constructChart(){
    this.chartOptions = {
      series: [
        {
          name: "Venta Mensual",
          data: this.dataChart
        }
      ],
      chart: {
        height: 350,
        type: "bar"
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
      xaxis: {
        categories: ["Enero", "Febrero",  "Marzo",  "Abril",  "Mayo",  "Junio",  "Julio",  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      }
    };
  }
}
