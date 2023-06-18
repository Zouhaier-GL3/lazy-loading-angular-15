import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mentioned-vendors',
  templateUrl: './mentioned-vendors.component.html',
  styleUrls: ['./mentioned-vendors.component.scss']
})
export class MentionedVendorsComponent implements OnInit {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart
      "data": {
        "labels": ["January", "February", "March", "April"],
        "datasets": [{
            "label": "Page Impressions",
            "data": [10, 20, 30, 40],
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(255, 99, 132, 0.2)"
        }, {
            "label": "Adsense Clicks",
            "data": [5, 15, 10, 30],
            "type": "line",
            "fill": false,
            "borderColor": "rgb(54, 162, 235)"
        }]
    },
    "options": {
      "scales": {
          // "yAxes": [{
          //     "ticks": {
          //         "beginAtZero": true
          //     }
          // }]
      }
    }

    });
  }
}
