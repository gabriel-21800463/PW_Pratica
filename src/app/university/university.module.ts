import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { TeacherComponent } from './manageTeacher/teacher/teacher.component';
import {CourseUpdateComponent} from './manageCourse/course/course-update.component';
import {SharedModule} from '../shared/shared.module';
import { CourseDeleteDialogComponent } from './manageCourse/course/course-delete-dialog.component';
import { SubjectDeleteDialogComponent } from './manageSubject/subject/subject-delete-dialog.component';
import { TeacherDeleteDialogComponent } from './manageTeacher/teacher/teacher-delete-dialog.component';
import { TeacherUpdateComponent } from './manageTeacher/teacher/teacher-update.component';
import { TeacherDetailComponent } from './manageTeacher/teacher/teacher-detail.component';
import { SubjectDetailComponent } from './manageSubject/subject/subject-detail.component';
import { SubjectUpdateComponent } from './manageSubject/subject/subject-update.component';
import { CourseDetailComponent } from './manageCourse/course/course-detail.component';

@NgModule({
  declarations: [
    TeacherComponent,
    CourseUpdateComponent,
    CourseDeleteDialogComponent,
    SubjectDeleteDialogComponent,
    TeacherDeleteDialogComponent,
    TeacherUpdateComponent,
    TeacherDetailComponent,
    SubjectDetailComponent,
    SubjectUpdateComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    SharedModule
  ]
})
export class UniversityModule { }
