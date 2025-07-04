import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITeamData } from '../../../../core/interfaces/iteam-data';
import { teamData } from '../../../../core/constants/team';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapGlobe,
  bootstrapBehance,
  bootstrapInstagram,
  bootstrapMailbox,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-team-member',
  imports: [NgIcon, CommonModule],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss',
  animations: [
    trigger('memberAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
  viewProviders: [
    provideIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapGlobe,
      bootstrapBehance,
      bootstrapInstagram,
      bootstrapMailbox,
    }),
  ],
})
export class TeamMemberComponent implements OnChanges {
  @Input() activeMemberId: number = 0;

  activeMember?: ITeamData;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeMemberId']) {
      this.activeMember = undefined;

      setTimeout(() => {
        this.activeMember = teamData[this.activeMemberId];
      }, 50);
    }
  }
}
