import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectProblemComponent } from "./components/project-problem/project-problem.component";
import { ProposedSolutionComponent } from "./components/proposed-solution/proposed-solution.component";
import { ProjectGoalsComponent } from "./components/project-goals/project-goals.component";
import { ProjectImpactComponent } from "./components/project-impact/project-impact.component";

@Component({
  selector: 'app-project-page',
  imports: [ProjectProblemComponent, ProposedSolutionComponent, ProjectGoalsComponent, ProjectImpactComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent {

}
