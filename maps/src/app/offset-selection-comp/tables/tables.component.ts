import { Component, OnInit } from '@angular/core';
import { OffsetSelectionCompService } from '../offset-selection-comp.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private offsetSelectionCompService: OffsetSelectionCompService) { }

  ngOnInit() {
    this.offsetSelectionCompService.getGeneralTableData().subscribe(
      res => {

      },
      err => {
        console.log('error: ', err);
      }
    )
    
  }

}
