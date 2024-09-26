import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommunityComponent } from './components/community/community.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'ministry', component: MinistriesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'navbar', component: NavbarComponent},
  ];

