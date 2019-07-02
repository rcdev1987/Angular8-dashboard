import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { NgbdSortableHeaderDirective } from './directives/sortable.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NgbdSortableHeaderDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, NgbdSortableHeaderDirective]
})
export class SharedModule { }
