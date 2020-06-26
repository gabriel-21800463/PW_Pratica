import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {ManageAcademicUpdateComponent} from './academic/manage-academic-studies/manage-academic-update.component';
import {ManageAcademicDetailComponent} from './academic/manage-academic-studies/manage-academic-detail.component';
import {AcademicResolver} from './academic/academic.resolver';
import {CertificationResolver} from './certifications/certification.resolver';
import {ManageCertificationsUpdateComponent} from "./certifications/manage-certifications/manage-certifications-update.component";
import {ManageCertificationsDetailComponent} from "./certifications/manage-certifications/manage-certifications-detail.component";

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
      },
      {
        path: 'maangecertifications/:id/view',
        component: ManageCertificationsDetailComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'maangecertifications/:id/edit',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'maangecertifications/new',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
