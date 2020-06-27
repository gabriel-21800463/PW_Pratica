import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './manageCourse/course/course.component';
import {NotasComponent} from './manageNotas/notas/notas.component';
import {SubjectComponent} from './manageSubject/subject/subject.component';
import {TeacherComponent} from './manageTeacher/teacher/teacher.component';
import {ExtramilesComponent} from './extramiles/extramiles.component';
import {CourseUpdateComponent} from './manageCourse/course/course-update.component';
import {ManageAcademicUpdateComponent} from "../education/academic/manage-academic-studies/manage-academic-update.component";
import {AcademicResolver} from "../education/academic/academic.resolver";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'notas',
        component: NotasComponent
      },
      {
        path: 'extramiles',
        component: ExtramilesComponent
      },
      {
        path: 'course/new',
        component: CourseUpdateComponent,
        resolve: {
          course: AcademicResolver
        }
      },
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
