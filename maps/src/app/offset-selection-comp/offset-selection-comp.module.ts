import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffsetSelectionCompComponent } from './offset-selection-comp.component';
import { MapBoxComponent } from './map-box/map-box.component';

@NgModule({
  declarations: [OffsetSelectionCompComponent, MapBoxComponent],
  imports: [
    CommonModule
  ]
})
export class OffsetSelectionCompModule { }
