import { Component } from '@angular/core';
import { AccordionComponent } from "../../units/accordion/accordion.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
