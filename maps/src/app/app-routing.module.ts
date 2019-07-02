import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffsetSelectionCompComponent } from './offset-selection-comp/offset-selection-comp.component'

const routes: Routes = [
  {
    path: '', component: OffsetSelectionCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
