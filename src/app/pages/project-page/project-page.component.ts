import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectProblemComponent } from "./components/project-problem/project-problem.component";

@Component({
  selector: 'app-project-page',
  imports: [ProjectProblemComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent {

}
