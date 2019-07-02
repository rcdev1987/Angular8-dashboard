import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';

import { OffsetSelectionCompComponent } from './offset-selection-comp.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [OffsetSelectionCompComponent, MapBoxComponent, GeneralInfoComponent, TablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    NgbModule,
    NgxEchartsModule
  ],
  exports: [OffsetSelectionCompComponent]
})
export class OffsetSelectionCompModule { }
