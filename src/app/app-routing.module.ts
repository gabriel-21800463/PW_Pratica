import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';

const LAYOUT_ROUTES = [navbarRoute];

const appRoutes: Routes = [
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule'
  },
  {
    path: 'education',
    loadChildren: './education/education.module#EducationModule'
  },
  {
    path: 'university',
    loadChildren: './university/university.module#UniversityModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'profiles',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  ...LAYOUT_ROUTES,
  { path: 'customers', loadChildren: () => import('./university/university.module').then(m => m.UniversityModule) },
  { path: 'customers', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'customers', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
