import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffsetSelectionCompService {

  constructor() { }

  getBarChartData(): Observable<any> {
    const data = [
      {
        id: 0,
        type: 'Problem0',
        count: 8
      },
      {
        id: 1,
        type: 'Problem1',
        count: 6
      },
      {
        id: 2,
        type: 'Problem2',
        count: 8
      },
      {
        id: 3,
        type: 'Problem3',
        count: 4
      },
      {
        id: 4,
        type: 'Problem4',
        count: 4
      },
      {
        id: 5,
        type: 'Problem5',
        count: 22
      },
      {
        id: 6,
        type: 'Problem6',
        count: 6
      },
      {
        id: 7,
        type: 'Problem7',
        count: 3
      }
    ];
    return of(data);
  }

  getSunBurstChartData(): Observable<any> {
    const data = [
      {
        id: 0,
        name: 'productive',
        value: 100,
        children: [
          {
            name: 'in',
            value: 12
          },
          {
            name: 'out',
            value: 18
          },
          {
            name: 'moving',
            value: 70
          }
        ]
      },
      {
        id: 0,
        name: 'nonproductive',
        value: 20,
        children: [
          {
            name: 'failure1',
            value: 12
          },
          {
            name: 'failure2',
            value: 2
          },
          {
            name: 'failure3',
            value: 6
          }
        ]
      }
    ];
    return of(data);
  }

  getGeneralTableData(): Observable<any> {
    const data = [
      {
        id: 0,
        house_id: 0,
        house_name: '1',
        geo_latitude: 123321,
        geo_longitude: 321123,
        distance: 123,
        totalTime: 32,
        timePerFt: 12,
        nptTime: '2019-07-02T07:14:43Z',
        nptFraction: 0.1,
        totalCost: 20,
        mdDepth: 2,
        age: 33,
        costPerFt: 345
      }, {
        id: 1,
        house_id: 1,
        house_name: '2',
        geo_latitude: 123321,
        geo_longitude: 321123,
        distance: 23,
        totalTime: 43,
        timePerFt: 55,
        nptTime: '2019-07-01T07:14:43Z',
        nptFraction: 0.3,
        totalCost: 14,
        mdDepth: 1,
        age: 35,
        costPerFt: 233
      }, {
        id: 2,
        house_id: 2,
        house_name: '3',
        geo_latitude: 432234,
        geo_longitude: 543345,
        distance: 55,
        totalTime: 12,
        timePerFt: 21,
        nptTime: '2019-06-02T07:14:43Z',
        nptFraction: 0.8,
        totalCost: 2,
        mdDepth: 2,
        age: 25,
        costPerFt: 235
      }, {
        id: 3,
        house_id: 3,
        house_name: '4',
        geo_latitude: 554324,
        geo_longitude: 543633,
        distance: 543,
        totalTime: 55,
        timePerFt: 5,
        nptTime: '2019-07-02T07:14:43Z',
        nptFraction: 0.3,
        totalCost: 20,
        mdDepth: 2,
        age: 39,
        costPerFt: 345
      }, {
        house_id: 4,
        house_name: '5',
        geo_latitude: 543345,
        geo_longitude: 543786,
        distance: 98,
        totalTime: 8,
        timePerFt: 7,
        nptTime: '2019-06-07T07:14:43Z',
        nptFraction: 0.5,
        totalCost: 24,
        mdDepth: 3,
        age: 35,
        costPerFt: 45
      }, {
        id: 5,
        house_id: 5,
        house_name: '6',
        geo_latitude: 654456,
        geo_longitude: 654456,
        distance: 6,
        totalTime: 44,
        timePerFt: 55,
        nptTime: '2019-05-02T07:14:43Z',
        nptFraction: 0.4,
        totalCost: 60,
        mdDepth: 2,
        age: 19,
        costPerFt: 55
      }
    ];
    return of(data);
  }
}
