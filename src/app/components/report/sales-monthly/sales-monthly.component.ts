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
    this.reportService.getSalesService().subscribe((res) =>{
      res.forEach((element :any) => {
        this.salesData.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      console.log(this.salesData);
      this.formData();
      this.constructChart();
      this.viewReportSalesMonthly = true;
    });
  }


  formData(){
    let currentYear = new Date().getFullYear();
    this.salesData.forEach((element:any) => {
      let index = this.castDate(currentYear, element.sale_date.seconds);
      if(index >= 0 && index <= 11){
        this.dataChart[index] = this.dataChart[index] + element.cost_total_customer;
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

  castDate(currentYear: any, timestampUnix: any){
    let Months = [
      new Date(`01/01/${currentYear}`).getTime(),
      new Date(`01/02/${currentYear}`).getTime(),
      new Date(`01/03/${currentYear}`).getTime(),
      new Date(`01/04/${currentYear}`).getTime(),
      new Date(`01/05/${currentYear}`).getTime(),
      new Date(`01/06/${currentYear}`).getTime(),
      new Date(`01/07/${currentYear}`).getTime(),
      new Date(`01/08/${currentYear}`).getTime(),
      new Date(`01/09/${currentYear}`).getTime(),
      new Date(`01/10/${currentYear}`).getTime(),
      new Date(`01/11/${currentYear}`).getTime(),
      new Date(`01/12/${currentYear}`).getTime(),
      new Date(`01/12/${currentYear +1 }`).getTime(),
    ]

    let momentCurrentTimestamp = moment(timestampUnix * 1000);
    
    if(momentCurrentTimestamp.isBetween(moment(Months[0]), moment(Months[1]))) return 0; //Enero
    if(momentCurrentTimestamp.isBetween(moment(Months[1]), moment(Months[2]))) return 1; //Febrero
    if(momentCurrentTimestamp.isBetween(moment(Months[2]), moment(Months[3]))) return 2; //Marzo
    if(momentCurrentTimestamp.isBetween(moment(Months[3]), moment(Months[5]))) return 3; //Abril
    if(momentCurrentTimestamp.isBetween(moment(Months[4]), moment(Months[6]))) return 4; //Mayo
    if(momentCurrentTimestamp.isBetween(moment(Months[5]), moment(Months[7]))) return 5; //Junio
    if(momentCurrentTimestamp.isBetween(moment(Months[6]), moment(Months[8]))) return 6; //Julio
    if(momentCurrentTimestamp.isBetween(moment(Months[7]), moment(Months[9]))) return 7; //Agosto
    if(momentCurrentTimestamp.isBetween(moment(Months[8]), moment(Months[10]))) return 8; //Septiembre
    if(momentCurrentTimestamp.isBetween(moment(Months[9]), moment(Months[11]))) return 9; //Octubre
    if(momentCurrentTimestamp.isBetween(moment(Months[10]), moment(Months[12]))) return 10; //Nomviembre
    if(momentCurrentTimestamp.isBetween(moment(Months[11]), moment(Months[13]))) return 11; //Diciembre
    return -1;
  }
}
