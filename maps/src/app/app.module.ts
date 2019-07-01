import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffsetSelectionCompModule } from './offset-selection-comp/offset-selection-comp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    OffsetSelectionCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
