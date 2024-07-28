import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footprint',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footprint.component.html',
  styleUrl: './footprint.component.css'
})
export class FootprintComponent {
  title = 'map-switcher';
  latitude = 43.0306;  // Default latitude
  longitude = -88.1134; // Default longitude

  // Method to change the map's location
  setLocation(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
  }
}

