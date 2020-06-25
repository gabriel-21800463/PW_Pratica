import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import { ManageAcademicUpdateComponent } from './academic/manage-academic-studies/manage-academic-update.component';
import { ManageAcademicDeleteDialogComponent } from './academic/manage-academic-studies/manage-academic-delete-dialog.component';
import { ManageAcademicDetailComponent } from './academic/manage-academic-studies/manage-academic-detail.component';



@NgModule({
  declarations: [
    ManageAcademicStudiesComponent,
    ManageCertificationsComponent,
    ManageAcademicUpdateComponent,
    ManageAcademicDeleteDialogComponent,
    ManageAcademicDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
