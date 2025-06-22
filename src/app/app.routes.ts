import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'project',
    component: ProjectPageComponent,
  },
  {
    path: 'team',
    component: TeamPageComponent,
  },
];
