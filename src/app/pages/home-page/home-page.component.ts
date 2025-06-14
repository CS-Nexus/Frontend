import { Component } from '@angular/core';
import { HomeImageComponent } from "./components/home-image/home-image.component";
import { ProjectOverviewComponent } from "./components/project-overview/project-overview.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeImageComponent, ProjectOverviewComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
