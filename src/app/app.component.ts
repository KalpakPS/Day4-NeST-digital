import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { CardsComponent } from './units/cards/cards.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { FormsComponent } from './units/forms/forms.component';
import { FooterComponent } from "./units/footer/footer.component";
import { FootprintComponent } from './units/footprint/footprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardsComponent, CarouselComponent, AccordionComponent, FormsComponent, FooterComponent,RouterModule,FootprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NeST_digital';
}
