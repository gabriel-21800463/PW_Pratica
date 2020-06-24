import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {ManageProjectsUpdateComponent} from "../project/manage-projects/manage-projects-update.component";
import {ProjectResolver} from "../project/project.resolver";
import {ManageAcademicUpdateComponent} from "./academic/manage-academic-studies/manage-academic-update.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manageacademicstudies',
        component: ManageAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies/new',
        component: ManageAcademicUpdateComponent,
        resolve: {
          project: ProjectResolver
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
