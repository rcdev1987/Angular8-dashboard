import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

import { OffsetSelectionCompService } from '../offset-selection-comp.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  barChartOptions: any;
  detectEventChanges = true;
  sunBurstChartOptions: any;
  sunBurstChartData: any;

  constructor(private offsetSelectionService: OffsetSelectionCompService) { }

  ngOnInit() {
    let dataAxis = [];
    let data = [];
    const yMax = 500;
    const dataShadow = [];

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.offsetSelectionService.getBarChartData().subscribe(
      res => {
        dataAxis = res.map(typeData => typeData.type);
        data = res.map(typeData => typeData.count);
;      },
      err => {
        console.log('bar chart error: ', err);
      }
    );

    this.barChartOptions = {
      title: {
        text: 'Problem Frequency'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.05)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },
            emphasis: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          },
          data: data
        }
      ]
    };

    this.sunBurstChartData = [{
      name: 'Productive',
      value: 100,
      itemStyle: {
          color: '#da0d68'
      },
      children: [{
          name: 'In',
          value: 12,
          itemStyle: {
              color: '#975e6d'
          }
      }, {
          name: 'Out',
          value: 18,
          itemStyle: {
              color: '#e0719c'
          }
      }, {
          name: 'Moving',
          value: 70,
          itemStyle: {
              color: '#bb764c'
          }
      }]
  }, {
    name: 'Non-Productive',
    value: 20,
    itemStyle: {
        color: '#5e9a80'
    },
    children: [{
        name: 'Failure 1',
        value: 12,
        itemStyle: {
            color: '#b9a449'
        }
    }, {
        name: 'Failure 2',
        value: 2,
        itemStyle: {
            color: '#7a9bae'
        }
    }, {
        name: 'Failure 3',
        value: 6,
        itemStyle: {
            color: '#039fb8'
        }
    }]
},];

    this.sunBurstChartOptions = {
      title: {
          text: 'Sun Burst Chart',
          textStyle: {
              fontSize: 14,
              align: 'center'
          },
      },
      series: {
          type: 'sunburst',
          highlightPolicy: 'ancestor',
          data: this.sunBurstChartData,
          radius: [0, '95%'],
          sort: null,
          levels: [{}, {
              r0: '15%',
              r: '35%',
              itemStyle: {
                  borderWidth: 2
              },
              label: {
                  rotate: 'tangential'
              }
          }, {
              r0: '35%',
              r: '70%',
              label: {
                  align: 'center'
              }
          }]
      }
    };

    
  }

  onChartEvent(event: any, type: string) {
  }

}
