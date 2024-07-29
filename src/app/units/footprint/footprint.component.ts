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
  
  // Method to change the map's location
  setLocation(url: string) {
    const mapFrame = document.getElementById('mapFrame') as HTMLIFrameElement;
    mapFrame.src = url;
  }
}

