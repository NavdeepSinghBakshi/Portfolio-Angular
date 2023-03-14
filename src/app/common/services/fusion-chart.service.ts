import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FusionchartService {

  constructor() { }
  column3d(chartData: any, caption: string, subCaption: string, xAxisName: string, yAxisName: string, numberSuffix: string, tdDisplayvalue: string, tdStartValue: string): any {
    let dataSource = {
      chart: {
        caption: caption,
        subCaption: subCaption,
        xAxisName: xAxisName,
        yAxisName: yAxisName,
        numberSuffix: numberSuffix,
        theme: "fusion"
      },
      data: chartData,
      trendlines: [{
        line: [{
          startvalue: tdStartValue,
          valueOnRight: "1",
          displayvalue: tdDisplayvalue,
          color: "#29C3BE",
          thickness: "2"
        }]
      }]
    };
    return dataSource
  }
  doughnut2d(chartData: any, caption: string, subCaption: string) {

    let dataSource = {
      chart: {
         caption: caption,
         subCaption: subCaption,
         numberPrefix: "Rs",
         bgColor: "FFFFFF",
         startingAngle: "310",
         showLegend: "1",
         //defaultCenterLabel: 'Total revenue: Rs3000000',
         centerLabel: "Revenue from $label: $value",
         centerLabelBold: "1",
         showTooltip: "0",
         decimals: "1",
         theme: "fusion"
      },
      data: chartData
    }
    return dataSource;
  }
  msline(categories: any, dataset: any, caption: string, subCaption: string) {
    let dataSource = {
      chart: {
        caption: caption,
        subCaption: subCaption,
        yAxisname: "Ratings",
        theme: "fusion"
      },
      categories: categories,
      dataset: dataset,
      trendlines: [{
        "line": [{
          "startvalue": "3",
          "color": "#62B58F",
          "valueOnRight": "1",
          "displayvalue": "Average = 3"
        }]
      }]
    };
    return dataSource
  }
  
}