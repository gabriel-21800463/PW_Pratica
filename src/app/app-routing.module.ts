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
    loadChildren: './unviversity/unviversity.module#UnviversityModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  ...LAYOUT_ROUTES,
  { path: 'customers', loadChildren: () => import('./unviversity/unviversity.module').then(m => m.UnviversityModule) },
  { path: 'customers', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'customers', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
