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
  ApexTitleSubtitle,
  ApexYAxis,

} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
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

  public viewReportIncomeExpenses:boolean = false;

  incomeData: any = [0,0,0,0,0,0,0,0,0,0,0,0];
  expensesData: any = [0,0,0,0,0,0,0,0,0,0,0,0];
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
          ...orderDoc.payload.doc.data(),
        })
      });
      console.log(this.salesData);
      this.formData();
      this.constructChart();
      this.viewReportIncomeExpenses = true;
      
    });
  }

  formData(){
    let currentYear = new Date().getFullYear();
    this.salesData.forEach((element:any) => {
      
      let currentYearItem = new Date(element.FechaEntrega.seconds*1000).getFullYear();
      let currentMonthItem = new Date(element.FechaEntrega.seconds*1000).getMonth();
      
      let expenseSaleShop = 0;
      element.products.forEach((productItem:any) => {
        expenseSaleShop = expenseSaleShop + productItem.product.purchase_price*productItem.unit;
      });

      if(currentYear == currentYearItem){
        this.incomeData[currentMonthItem] = this.incomeData[currentMonthItem] + element.total;
        this.expensesData[currentMonthItem] = this.expensesData[currentMonthItem] + expenseSaleShop;
      }
    });   
  }

  constructChart(){
    this.chartOptions = {
      series: [
        {
          name: "Ingresos",
          data: this.incomeData
        },
        {
          name: "Egresos",
          data: this.expensesData
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
        categories: ["Enero", "Febrero",  "Marzo",  "Abril",  "Mayo",  "Junio",  "Julio",  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      },
      yaxis:{
        labels:{
          formatter: function (val:any, index:any) {
            return val.toFixed(2);
          }
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yy"
        },
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
      }
    };
  }
}
