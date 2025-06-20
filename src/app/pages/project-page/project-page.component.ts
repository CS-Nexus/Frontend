import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectProblemComponent } from "./components/project-problem/project-problem.component";
import { ProposedSolutionComponent } from "./components/proposed-solution/proposed-solution.component";

@Component({
  selector: 'app-project-page',
  imports: [ProjectProblemComponent, ProposedSolutionComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent {

}
