import { Component } from '@angular/core';
import { ITeamData } from '../../core/interfaces/iteam-data';
import { teamData } from '../../core/constants/team';
import { CommonModule } from '@angular/common';
import { TeamMemberComponent } from "./components/team-member/team-member.component";

@Component({
  selector: 'app-team-page',
  imports: [CommonModule, TeamMemberComponent],
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
