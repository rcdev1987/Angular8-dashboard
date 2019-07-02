import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'html-marker',
  template: `
    <h3>{{ data.house_name }}</h3>
    <p>
      {{ data.geo_latitude }}, {{data.geo_longitude}}
    </p>
  `
})
export class HTMLMarkerComponent {
  @Input() data;
}
