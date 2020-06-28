import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './manageCourse/course/course.component';
import {NotasComponent} from './manageNotas/notas/notas.component';
import {SubjectComponent} from './manageSubject/subject/subject.component';
import {TeacherComponent} from './manageTeacher/teacher/teacher.component';
import {ExtramilesComponent} from './extramiles/extramiles.component';
import {CourseUpdateComponent} from './manageCourse/course/course-update.component';
import {CourseResolver} from './manageCourse/course.resolver';
import {CourseDetailComponent} from './manageCourse/course/course-detail.component';
import {TeacherUpdateComponent} from "./manageTeacher/teacher/teacher-update.component";
import {TeacherDetailComponent} from "./manageTeacher/teacher/teacher-detail.component";
import {TeacherResolver} from "./manageTeacher/teacher.resolver";

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
          course: CourseResolver
        }
      },
      {
        path: 'course/:id/view',
        component: CourseDetailComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'course/:id/edit',
        component: CourseUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'teacher/new',
        component: TeacherUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'teacher/:id/view',
        component: TeacherDetailComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'teacher/:id/edit',
        component: TeacherUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
