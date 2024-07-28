import { Component } from '@angular/core';
import { AccordionComponent } from "../../units/accordion/accordion.component";
import { FootprintComponent } from "../../units/footprint/footprint.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccordionComponent, FootprintComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
