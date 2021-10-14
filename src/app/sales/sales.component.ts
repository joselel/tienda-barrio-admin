import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { single } from './data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  single: any[] | undefined;
  multi: any[] | undefined;

    // Graficas

  // view: any[] = [1000, 500];

  public data = [];

    // options for the chart
    showXAxis = true; // Mostrar las fechas del eje X
    showYAxis = true; // Mostrar los datos del eje y
    gradient = false;
    showLegend = true; // Mostrar leyende de la derecha
    showXAxisLabel = false;
    xAxisLabel = 'Date';
    showYAxisLabel = false;
    yAxisLabel = 'Value';
    legendPosition = 'below';
    timeline = true;
    animations = true; // this is where you turn your animations on and off.

    colorScheme = {
      domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
    };


    // line, area
    autoScale = true;

    // pie
    showLabels = true;
    explodeSlices = true;
    doughnut = false;
  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

  onSelect(event:any) {
    console.log(event);
  }

  axisDate(val: string): string {
    console.log(this);
    // This works
    return formatDate(val, 'HH:mm:ss', 'en');

    // This doesnt
    // return formatDate(val, this.timeFormat, 'en');
  }
}
