import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffsetSelectionCompService } from './offset-selection-comp.service';

@Component({
  selector: 'app-offset-selection-comp',
  templateUrl: './offset-selection-comp.component.html',
  styleUrls: ['./offset-selection-comp.component.scss']
})
export class OffsetSelectionCompComponent implements OnInit {
  searchForm: FormGroup;
  submitted: boolean = false;
  mapData = [];

  constructor(
    private formBuilder: FormBuilder,
    private offsetSelectionService: OffsetSelectionCompService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      distance: [10, Validators.required],
      age: [10, Validators.required]
    });
  }

  public searchHouses() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }
    const distance = this.searchForm.value.distance;
    const age = this.searchForm.value.age;
    this.offsetSelectionService.getMapboxData(distance, age).subscribe(
      res => {
        this.mapData = res;
      },
      err => {
        console.log('map error: ', err);
      }
    );
  }

}
