import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit{
  public chart: any;
  ngOnInit(): void {
    this.HorizentalChart();
    this.VerticalChart();
  }


  HorizentalChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      "data": {
        "labels": ["", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "datasets": [{
            "label": "Page Impressions",
            "data": [40,60,40,60,40,60,40,60,40,60,40,60,40,60,40,60,40,60,40,60,40,60,40,60,40],
            "backgroundColor": [
              'rgba(255, 159, 64, 0.2)',
            ],
            "borderColor": [
              'rgb(255, 159, 64)',
            ],
            "borderWidth": 1
        }, {
            "label": "Adsense Clicks",
            "data": [30, 50, 30, 50,30, 50, 30, 50, 30,50,30, 50, 30, 50,30, 50, 30, 50, 30,50,30, 50, 30, 50, 30],
            "type": "line",
            "fill": false,
            "borderColor": "rgb(54, 162, 235)"
        }]
    },
    "options": {
      maintainAspectRatio: false,
      scales: {
        x: {
            grid: {
              offset: true
            }
        }
    }}
    });
  }

  VerticalChart(){
    this.chart = new Chart("VerticalChart", {
      type: 'bar', //this denotes tha type of chart
      "data": {
        "labels": ["Unix", "HP", "Mozilla", "Microsoft", "Intel", "Linux", "Apache", "Oracle", "IBM", "SESCO"],
        datasets: [{
          label: 'Top Mentioned Vendors',
          data: [100,90,80,70,60,50,40,30,20,10],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
          ],
          borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      indexAxis: 'y',
    }
    });
  }
}
