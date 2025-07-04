import { Component } from '@angular/core';
import { ITeamData } from '../../core/interfaces/iteam-data';
import { teamData } from '../../core/constants/team';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-page',
  imports: [CommonModule],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  teamDataArr : ITeamData[] = teamData;
  activeImg: number = 0;

  setActiveImg(index: number){
    this.activeImg = index;
  }
}
