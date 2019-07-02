import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offset-selection-comp',
  templateUrl: './offset-selection-comp.component.html',
  styleUrls: ['./offset-selection-comp.component.scss']
})
export class OffsetSelectionCompComponent implements OnInit {
  searchForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      distance: [undefined, Validators.required],
      age: [undefined, Validators.required]
    });
  }

  searchHouses() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }
    console.log('form: ', this.searchForm.value);
  }

}
