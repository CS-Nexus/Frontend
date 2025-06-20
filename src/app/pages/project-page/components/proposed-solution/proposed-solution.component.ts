import { Component } from '@angular/core';
import { IEnvironment } from '../../../../core/interfaces/ienviroment';
import { environments } from '../../../../core/constants/environments';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapHeadsetVr, bootstrapGlobe2, bootstrapPuzzle, bootstrapRepeat, bootstrapController} from '@ng-icons/bootstrap-icons';
import { ISolution } from '../../../../core/interfaces/isolution';
import { solutions } from '../../../../core/constants/solutions';
@Component({
  selector: 'app-proposed-solution',
  imports: [CommonModule, NgIcon],
  templateUrl: './proposed-solution.component.html',
  styleUrl: './proposed-solution.component.scss',
  viewProviders:[provideIcons({
    bootstrapHeadsetVr,
    bootstrapGlobe2,
    bootstrapPuzzle,
    bootstrapRepeat,
    bootstrapController
  })]
})
export class ProposedSolutionComponent {
  environmentDetails : IEnvironment[] = environments;
  solutions : ISolution[] = solutions;
  active: number = 0;

  handleClick(id: number){
    this.active = id
  }
}
