import {
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { OffsetSelectionCompService } from '../offset-selection-comp.service';
import House from '../offset-selection-comp.model';

import {
  NgbdSortableHeaderDirective,
  SortEvent
} from '../../shared/directives/sortable.directive';

export const compare = (v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<
    NgbdSortableHeaderDirective
  >;

  columns: Array<string>;
  generalHouseData: House[];
  rankingHouseData: House[];
  _rankingHouseData: House[];
  rankingWeight: any;

  constructor(private offsetSelectionCompService: OffsetSelectionCompService) { }

  ngOnInit() {
    this.columns = ['House Name', 'Distance', 'Age', 'Time', 'Days for 10k', 'Cost'];
    this.rankingWeight = {
      cost: 0.2,
      distance: 0.1,
      age: 0.1,
      time: 0.3,
      days: 0.3
    };

    this.offsetSelectionCompService.getGeneralTableData().subscribe(
      res => {
        this.generalHouseData = res;
        this.rankingHouseData = res.map((house: any, id: number) => ({
          totalRank: (
            house.costPerFt * this.rankingWeight.cost
            + house.distance * this.rankingWeight.distance
            + house.age * this.rankingWeight.age
            + house.totalTime * this.rankingWeight.time
            + house.timePerFt * this.rankingWeight.days).toFixed(2),
          ...house
        }));
        this._rankingHouseData = this.rankingHouseData;
        this.rankingHouseData = [...this.rankingHouseData].sort((a, b) => {
          return res = compare( Number(b['totalRank']), Number(a['totalRank']));
        });
      },
      err => {
        console.log('error: ', err);
      }
    );
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.appSortable !== column) {
        header.direction = '';
      }
    });

    // sorting table data
    if (direction === '') {
      this.rankingHouseData = this._rankingHouseData;
    } else {
      this.rankingHouseData = [...this.rankingHouseData].sort((a, b) => {
        const res = compare(Number(a[column]), Number(b[column]));
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
