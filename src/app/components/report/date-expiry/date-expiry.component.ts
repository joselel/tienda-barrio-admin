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
} from 'ng-apexcharts';
import { ThrowStmt } from '@angular/compiler';

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
  styleUrls: ['./date-expiry.component.css'],
})
export class DateExpiryComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  public viewReportExpiry:boolean = false;

  products: any = [];
  datachart: any = [];

  constructor(private reportService: ReportsService) {
    this.getProducts();
  }

  ngOnInit(): void {
    
  }

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
      this.formatData();
      this.construcChart();
      this.viewReportExpiry = true;
    });
  }

  formatData() {
    this.products.forEach((element: any) => {
      let momenttoday = moment(new Date().getTime());
      let momentexpiry = moment(
        new Date(element.expiration_date.seconds * 1000)
      );
      let daysLine = momentexpiry.diff(momenttoday, 'days');

      let color = "#00E396"
      if (daysLine <= 20) color = "#FF4560"
    
      this.datachart.push({
        x: element.name,
        y: [new Date().getTime(), element.expiration_date.seconds * 1000],
        fillColor: color
      });

    });

    console.log(this.datachart);
    
  }

  construcChart(){
    this.chartOptions = {
      series: [
        {
          name: 'Fecha de Vencimiento',
          data: this.datachart,
        },
      ],
      chart: {
        type: 'rangeBar',
        height: 450,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '100%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
          
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, 'days');
          return 'Vence en: ' + diff + (diff > 1 ? ' dias' : ' dia');
        },
        style: {
          colors: ['#f3f4f5', '#fff'],
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        title: {
          text: 'Fecha de Caducidad',
        },
      },
    };
  }


}
