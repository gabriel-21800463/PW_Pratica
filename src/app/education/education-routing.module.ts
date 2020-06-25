import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {ManageAcademicUpdateComponent} from './academic/manage-academic-studies/manage-academic-update.component';
import {ManageAcademicDetailComponent} from './academic/manage-academic-studies/manage-academic-detail.component';
import {AcademicResolver} from './academic/academic.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manageacademicstudies',
        component: ManageAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies/:id/view',
        component: ManageAcademicDetailComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/:id/edit',
        component: ManageAcademicUpdateComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/new',
        component: ManageAcademicUpdateComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'maangecertifications',
        component: ManageCertificationsComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
