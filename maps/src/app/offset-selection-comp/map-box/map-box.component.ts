import { Component, OnInit, Input, ComponentFactoryResolver, ComponentRef, Injector, DoCheck } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, Marker, LatLngExpression } from 'leaflet';

import House from '../offset-selection-comp.model';
import { HTMLMarkerComponent } from './html-marker.component';

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<HTMLMarkerComponent>
}
@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {
  map;
  markers: MarkerMetaData[] = [];
  housesData: House[] = [];
  title = 'maps';
  options: any;
  layersControl: any;

  @Input()
  set mapData(data: House[]) {
    if (data.length) {
      this.markers.forEach((marker: MarkerMetaData) => {
        // remove the marker from the map
        marker.markerInstance.removeFrom(this.map);
        // destroy the component to avoid memory leaks
        marker.componentInstance.destroy();
      });
      this.markers = [];
      data.forEach((entry: House) => {
        // dynamically instantiate a HTMLMarkerComponent
        const factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);
        // we need to pass in the dependency injector
        const component = factory.create(this.injector);
        // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
        component.instance.data = entry;
        // we need to manually trigger change detection on our in-memory component
        // s.t. its template syncs with the data we passed in
        component.changeDetectorRef.detectChanges();
        // create a new Leaflet marker at the given position
        const position: LatLngExpression = [entry.geo_latitude, entry.geo_longitude]
        const m = marker(position);
        // pass in the HTML from our dynamic component
        const popupContent = component.location.nativeElement;
        // add popup functionality
        m.bindPopup(popupContent).openPopup();
        // finally add the marker to the map s.t. it is visible
        m.addTo(this.map);

        // add a metadata object into a local array which helps us
        // keep track of the instantiated markers for removing/disposing them later
        this.markers.push({
          name: entry.house_name,
          markerInstance: m,
          componentInstance: component
        });
      });
    } else {
      this.options = {
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 4,
        center: latLng(37.556410, -99.101948)
      };
      this.layersControl = {
        baseLayers: {
          'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
          'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        },
        // overlays: {
        //   'Relevant Homes': circle([ 46.95, -122 ], { radius: 5000 }),
        //   'Prosperous Homes': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
        // }
      };
    }
  }

  get mapData(): House[] {
    return this.housesData;
  }

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) { }

  ngOnInit() {
  }

  onMapReady(map) {
    // get a local reference to the map as we need it later
    this.map = map;
  }

}
