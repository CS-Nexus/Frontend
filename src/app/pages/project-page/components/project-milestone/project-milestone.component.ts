import { mileStones } from './../../../../core/constants/milestones';
import { Component } from '@angular/core';
import {
  bootstrapCheckCircle,
  bootstrapClock,
  bootstrapFlag,
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IMilestone } from '../../../../core/interfaces/imilestone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-milestone',
  imports: [CommonModule, NgIcon],
  templateUrl: './project-milestone.component.html',
  styleUrl: './project-milestone.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapCheckCircle,
      bootstrapClock,
      bootstrapFlag,
    }),
  ],
})
export class ProjectMilestoneComponent {
  mileStonesDetails: IMilestone[] = mileStones;
}
