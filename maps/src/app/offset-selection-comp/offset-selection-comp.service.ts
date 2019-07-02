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

  getGeneralTableData(): Observable<any> {
    const data = {};
    return of(data);
  }
}
