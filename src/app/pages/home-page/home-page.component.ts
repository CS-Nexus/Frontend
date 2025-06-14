import { Component } from '@angular/core';
import { HomeImageComponent } from "./components/home-image/home-image.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeImageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
